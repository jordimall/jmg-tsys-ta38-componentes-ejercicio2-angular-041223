export class Contact {
  private name: string;
  private email: string;
  private message: string;

  constructor(name: string, email: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  public getName = (): string => {
    return this.name;
  };

  public getEmail = (): string => {
    return this.email;
  };

  public getMessage = (): string => {
    return this.message;
  };
}
