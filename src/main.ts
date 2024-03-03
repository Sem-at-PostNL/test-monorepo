import * as cdk from 'aws-cdk-lib';
import { Dev } from './dev';
import { Acc } from './acc';
import { Prd } from './prd';
import * as stage from './stage';
import * as singleton from './lib/cdkStacks/singletonInfraStack';

const app = new cdk.App();

// Only enable opensearch on a dev branch if you wish to make changes to the current opensearch implementation. For all other changes leave this configuration to false
// Also be aware that creating the opensearch resources will take an additional 15+ minutes.
const OPENSEARCH_ENABLED = false;

new Dev(app, {
  singletonInfra: new singleton.DevSingletonInfraStack(app).infrastructure,
  enableOpensearch: OPENSEARCH_ENABLED
});

new Acc(app, { singletonInfra: new singleton.AccSingletonInfraStack(app).infrastructure });

if (stage.isDeployedFromPipeline()) {
  new Prd(app, { singletonInfra: new singleton.ProdSingletonInfraStack(app).infrastructure });
}

app.synth();
