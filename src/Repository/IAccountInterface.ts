import { Account } from "../Models/Account";

export interface IAccountInterface extends  Account {
  // CRUD da Conta
  searchByNumber(number: number): void;
  listAll(): void;
  register(account: Account): void;
  update(account: Account): void;
  delete(number: number): void;

  // Métodos Bancários
  withdraw(accountNumber: number, amount: number): void;
  deposit(accountNumber: number, amount: number): void;
  transfer(
    sourceNumber: number,
    destinationNumber: number,
    amount: number ): void;
}
