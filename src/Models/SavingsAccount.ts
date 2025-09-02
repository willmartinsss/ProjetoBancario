import { Account } from "./Account";

export class SavingAccount extends Account {
  private _birthday: number;

  constructor(
    holder: string,
    agency: number,
    number: number,
    type: number,
    amount: number,
    birthday: number
  ) {
    super(holder, agency, number, type, amount);
    this._birthday = birthday;
  }

  public get birthday_1() {
    return this._birthday;
  }
  public set birthday_1(value: number) {
    this._birthday = value;
  }

  public visualize(): void {
    super.visualize();
    console.log("Dia do aniversário: " + this._birthday);
  }

}