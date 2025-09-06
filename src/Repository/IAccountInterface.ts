import { Account } from "../Models/Account";

export interface IAccountInterface {
  // CRUD da Conta
  searchByNumber(number: number): void;
  listAll(): void;
  register(account: Account): void;
  update(account: Account): void;
  delete(number: number): void;

  // Métodos Bancários
  withdraw(number: number, value: number): void;
  deposit(number: number, value: number): void;
  transfer(
    sourceNumber: number,
    destinationNumber: number,
    amount: number
  ): void;
}
