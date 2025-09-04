import { Account } from "./Account";

export class CurrentAccount extends Account {
  private _limit: number;

  constructor(
    agency: number,
    number: number,
    type: number,
    holder: string,
    amount: number,
    limit: number
  ) {
    super(agency, number, type, holder, amount);
    this._limit = limit;
  }

  public getLimit(): number {
    return this._limit;
  }

  public setLimit(limit: number): void {
    this._limit = limit;
  }

  public withdraw(amount: number): boolean {
    if (this.amount + this._limit < amount) {
      console.log(
        `\nSaldo insuficiente, pois o saldo  está com R$ ${this.amount}`
      );
      return false;
    }
    this.amount -= amount;
    return true;
  }

  public visualize(): void {
    super.visualize();
    console.log("Limite: " + this._limit.toFixed(2));
  }
}
