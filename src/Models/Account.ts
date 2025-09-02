export class Account {

  private _holder: string;
  private _agency: number;
  private _number: number;
  private _type: number;
  private _amount: number;

  constructor(
    holder: string,
    agency: number,
    number: number,
    type: number,
    amount: number
  ) {
    this._holder = holder;
    this._agency = agency;
    this._number = number;
    this._type = type;
    this._amount = amount;
  }

  // Getters
  public get holder() {
    return this._holder;
  }

  public get agency() {
    return this._agency;
  }

  public get number() {
    return this._number;
  }

  public get type() {
    return this._type;
  }

  public get amount() {
    return this._amount;
  }

  // Setters
  public set holder(holder: string) {
    this._holder = holder;
  }

  public set agency(agency: number) {
    this._agency = agency;
  }

  public set number(number: number) {
    this._number = number;
  }

  public set type(type: number) {
    this._type = type;
  }

  public set amount(amount: number) {
    this._amount = amount;
  }

  public withdraw(amount: number): boolean {
    if (this._amount < amount) {
      console.log(`\nSaldo insuficiente, pois o saldo  está com R$ ${this._amount}`);
      return false;
    }

    this._amount -= amount;
    return true;
  }

  public deposit(amount: number): void {
    this._amount += amount;
  }

  public visualize(): void {
    let type: string = "";

    switch (this._type) {
      case 1:
        type = "Conta Corrente";
        break;
      case 2:
        type = "Conta poupança";
        break;
      default:
        console.log("Selecione uma conta válida!!");
    }

    console.log("\n\n*****************************************************");
    console.log("Dados da Conta:");
    console.log("*****************************************************");
    console.log("Numero da Conta: " + this._number);
    console.log("Agência: " + this._agency);
    console.log("Tipo da Conta: " + type);
    console.log("Titular: " + this._holder);
    console.log("Saldo: " + this._amount.toFixed(2));
  }
}
