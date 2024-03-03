export class Anonymizer {
  private toBeRedacted: string[];

  private redactedValue: any;

  constructor(toBeRedacted: string[], redactedValue: any) {
    this.toBeRedacted = toBeRedacted;
    this.redactedValue = redactedValue;
  }

  private isObject(variable: any): boolean {
    return Object.prototype.toString.call(variable) === '[object Object]';
  }

  private isArray(variable: any): boolean {
    return Array.isArray(variable);
  }

  private isJson(variable: any): boolean {
    return this.isObject(variable) || this.isArray(variable);
  }

  private redact(redact: boolean, variable: any) {
    return redact ? `${this.redactedValue} (${typeof variable})` : variable;
  }

  private keyShouldBeRedacted(keyName: string): boolean {
    return this.toBeRedacted.some((part: string) => keyName.toLowerCase().indexOf(part.toLowerCase()) > -1);
  }

  public anonymize(toBeAnonymized: any, redacted: boolean = false): any {
    let parsed = false;
    let variable = toBeAnonymized;
    if (!this.isJson(variable)) {
      try {
        const parsedVariable = JSON.parse(variable);
        if (!this.isJson(parsedVariable)) {
          return this.redact(redacted, variable);
        }
        variable = parsedVariable;
        parsed = true;
      } catch (err) {
        return this.redact(redacted, variable);
      }
    }
    if (this.isArray(variable)) {
      const mapped = variable.map((element: any) => this.anonymize(element, redacted));
      return parsed ? JSON.stringify(mapped) : mapped;
    }
    const newElement: Record<string, any> = {};
    Object.keys(variable).forEach((key) => {
      if (this.keyShouldBeRedacted(key)) {
        newElement[key] = this.anonymize(variable[key], true);
      } else {
        newElement[key] = this.anonymize(variable[key], redacted);
      }
    });
    return parsed ? JSON.stringify(newElement) : newElement;
  }
}
