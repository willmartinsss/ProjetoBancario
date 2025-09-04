import { Account } from "../Models/Account";
import { colors } from "../utils/Colors";
import { IAccountInterface } from "./../Repository/IAccountInterface";

export class AccountController implements IAccountInterface {
  private accountList: Array<Account> = new Array<Account>();
  number: number = 0;

  searchByNumber(number: number): void {
    let seachAccount = this.searchInArray(number);

    if (seachAccount != null) {
      seachAccount.visualize();
    } else
      console.log(colors.fg.red, "\nA Conta número: " + number + "não foi encontrada!", colors.reset);
  }
  listAll(): void {
    for (let account of this.accountList) {
      account.visualize();
    }
  }
  register(account: Account): void {
    this.accountList.push(account);
    console.log(
      colors.fg.green,
      "\nA conta número: " + account.number + " foi criada com sucesso!",
      colors.reset
    );
  }
  update(account: Account): void {
    let searchAccount = this.searchInArray(account.number);

    if (searchAccount != null) {
      this.accountList[this.accountList.indexOf(searchAccount)] = account;
      console.log(colors.fg.green, "\nA Conta número: " + account.number + " foi atualizada com sucesso!", colors.reset);
    } else
       console.log(
         colors.fg.red,
         "\nA Conta número: " + account.number + " não foi encontrada!",
         colors.reset
       );
  }
  delete(number: number): void {
    let searchAccount = this.searchInArray(number);
    
    if (searchAccount != null) {
      this.accountList.splice(this.accountList.indexOf(searchAccount), 1)
      console.log(colors.fg.green, "\nA Conta número: " + number + " foi apagada com sucesso!", colors.reset);
    } else {
      console.log(colors.fg.green, "\nA Conta número: " + number + " não foi encontrada!", colors.reset);
    }

  }
  withdraw(accountNumber: number, amount: number): void {
    throw new Error("Method not implemented.");
  }
  deposit(accountNumber: number, amount: number): void {
    throw new Error("Method not implemented.");
  }
  transfer(
    sourceNumber: number,
    destinationNumber: number,
    amount: number
  ): void {
    throw new Error("Method not implemented.");
  }

  public generatorNumber(): number {
    return ++ this.number;
  }

  //Checar se ha conta existe
  public searchInArray(number: number): Account | null {
    for (let account of this.accountList){
      if (account.number === number)
        return account;
    }
    return null;
  }
}
