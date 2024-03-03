import { Construct } from 'constructs';
import { EnvironmentStage } from '../stage';
import * as ssm from '@aws-sdk/client-ssm';
import * as lambdaAPI from '@aws-sdk/client-lambda';

function ensureLeadingSlash(s: string) {
  return s.startsWith('/') ? s : `/${s}`;
}

export enum ParameterRegistry {
  /**
   * This enum contains the list of all parameters that are used in the project.
   * Starting from the construct path, the parameter name is built as follows:
   * /<construct path>/<parameter name>
   *
   * It excludes the stack name, which is added by the ParameterClient for retrieval,
   * and by the generateParameterName function for infrastructure deployment.
   */

  // The following parameters are used in the integration test of lambdas for inTransit table
  core_InTransit_updateQueueUrl = 'CORE/InTransit/updateQueueUrl',
  core_InTransit_ingestQueueUrl = 'CORE/InTransit/ingestQueueUrl',
  core_InTransit_tableName = 'CORE/InTransit/tableName',

  // The following parameters are used in the integration test of lambdas for item table
  core_Item_ingestUndeliverableQueueUrl = 'CORE/Item/ingestUndeliverableItemQueueUrl',
  core_Item_ingestQueueUrl = 'CORE/Item/ingestQueueUrl',
  core_Item_tableName = 'CORE/Item/tableName',

  // The following parameters are used in the integration test of lambdas for event table
  core_Event_ingestQueueUrl = 'CORE/Event/ingestQueueUrl',
  core_Event_tableName = 'CORE/Event/tableName',

  // The following parameters are used in the integration test of the mapItemToIngest lambda
  core_IngestionMapper_ingestionLambdaName = 'CORE/IngestionMapper/ingestionLambdaName',
  core_IngestionMapper_sourceQueueUrl = 'CORE/IngestionMapper/sourceQueueUrl',
  core_IngestionMapper_testIngestInTransitTargetQueueUrl = 'CORE/IngestionMapper/testIngestInTransitTargetQueueUrl',
  core_IngestionMapper_testUpdateInTransitTargetQueueUrl = 'CORE/IngestionMapper/testUpdateInTransitTargetQueueUrl',
  core_IngestionMapper_testIngestItemTargetQueueUrl = 'CORE/IngestionMapper/testIngestItemTargetQueueUrl',

  // The following parameters are used in the integration test of the busConsumer lambda
  core_itemBusConsumer_lambdaFunctionName = 'CORE/itemBusConsumer/lambdaFunctionName',
  core_itemBusConsumer_testTargetQueueUrl = 'CORE/itemBusConsumer/testTargetQueueUrl',
  core_eventBusConsumer_lambdaFunctionName = 'CORE/eventBusConsumer/lambdaFunctionName',
  core_eventBusConsumer_testTargetQueueUrl = 'CORE/eventBusConsumer/testTargetQueueUrl',
  //The following parameters are used in the integration test of apigateway
  core_api_URL = 'CORE/core-get-item-api/endPointURL',
  core_api_in_transit_resource_id = 'CORE/core-get-item-api/inTransitResourceId',
  core_api_item_resource_id = 'CORE/core-get-item-api/itemResourceId',
  core_api_event_resource_id = 'CORE/core-get-item-api/eventResourceId',
  core_api_rest_api_id = 'CORE/core-get-item-api/restApiId'
}

export function generateParameterName(scope: Construct, name: string) {
  const paramName = `${scope.node.path}/${name}`;

  const withoutStackName = paramName.split('/').slice(1).join('/');
  if (!Object.values(ParameterRegistry).includes(withoutStackName as ParameterRegistry)) {
    throw new Error(`Parameter name ${paramName} is not in the registry`);
  }
  return ensureLeadingSlash(paramName);
}

export class ParameterClient {
  private readonly stage: EnvironmentStage;

  private readonly paramNameStackPrefix: string;

  private readonly featureBranchName?: string;

  private readonly client: ssm.SSMClient;

  constructor(stage: EnvironmentStage, client: ssm.SSMClient, featureBranchName?: string) {
    this.stage = stage;
    if (stage === EnvironmentStage.DEV && featureBranchName === undefined) {
      throw new Error('feature_branch_name must be provided for DEV stage');
    }
    this.featureBranchName = featureBranchName;
    this.paramNameStackPrefix = this.determineParamNameStackPrefix();
    this.client = client;
  }

  private determineParamNameStackPrefix(): string {
    if (this.stage === EnvironmentStage.DEV) {
      return `${this.featureBranchName}-${this.stage.toString()}`;
    } else {
      return this.stage.toString();
    }
  }

  public async retrieveParameter(parameterName: ParameterRegistry) {
    const completeParameterName = ensureLeadingSlash(`${this.paramNameStackPrefix}/${parameterName.toString()}`);
    let response;
    try {
      response = await this.client.send(
        new ssm.GetParameterCommand({
          Name: completeParameterName,
          WithDecryption: false
        })
      );
    } catch (e) {
      throw new Error(`Parameter ${completeParameterName} could not be retrieved: ${e}`);
    }
    const value = response.Parameter?.Value;
    if (!value) {
      throw new Error(`No value in response for parameter ${completeParameterName}, response: ${JSON.stringify(response)}`);
    }
    return value;
  }

  public async retrieveParameters<K extends string>(parameterNames: Record<K, ParameterRegistry>): Promise<Record<K, string>> {
    const keys = Object.keys(parameterNames) as K[];
    const promises = keys.map((key) => this.retrieveParameter(parameterNames[key]));

    const values = await Promise.all(promises);
    return keys.reduce(
      (acc, key, i) => {
        acc[key] = values[i];
        return acc;
      },
      {} as Record<K, string>
    );
  }
}

const lambdaClient = new lambdaAPI.LambdaClient({ region: 'eu-west-1' });

export const updateLambdaEnvironment = async (functionName: string, updatedEnvVar: Record<string, string>): Promise<void> => {
  await lambdaClient.send(
    new lambdaAPI.UpdateFunctionConfigurationCommand({
      FunctionName: functionName,
      Environment: {
        Variables: updatedEnvVar
      }
    })
  );
};
