import { escape } from "querystring";
import { Account } from "../Models/Account";
import { colors } from "../utils/Colors";
import { IAccountInterface } from "./../Repository/IAccountInterface";

export class AccountController implements IAccountInterface {
  private accountList: Array<Account> = new Array<Account>();
  number: number = 0;

  public searchByNumber(number: number): void {
    let seachAccount = this.searchInArray(number);

    if (seachAccount != null) {
      seachAccount.visualize();
    } else
      console.log(
        colors.fg.red,
        "\nA Conta número: " + number + "não foi encontrada!",
        colors.reset
      );
  }
  public listAll(): void {
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
  public update(account: Account): void {
    let searchAccount = this.searchInArray(account.number);

    if (searchAccount != null) {
      this.accountList[this.accountList.indexOf(searchAccount)] = account;
      console.log(
        colors.fg.green,
        "\nA Conta número: " + account.number + " foi atualizada com sucesso!",
        colors.reset
      );
    } else
      console.log(
        colors.fg.red,
        "\nA Conta número: " + account.number + " não foi encontrada!",
        colors.reset
      );
  }
  public delete(number: number): void {
    let searchAccount = this.searchInArray(number);

    if (searchAccount != null) {
      this.accountList.splice(this.accountList.indexOf(searchAccount), 1);
      console.log(
        colors.fg.green,
        "\nA Conta número: " + number + " foi apagada com sucesso!",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.green,
        "\nA Conta número: " + number + " não foi encontrada!",
        colors.reset
      );
    }
  }
  public withdraw(number: number, value: number): void {
    let account = this.searchInArray(number);

    if (account != null) {
      if (account.withdraw(value) == true)
        console.log(
          colors.fg.green,
          "\n O saque na conta numero: " +
            number +
            " foi efetuado com sucesso!",
          colors.reset
        );
    } else
      console.log(
        colors.fg.red,
        "\nA Conta numero: " + number + " não foi encontrada!",
        colors.reset
      );
  }
  public deposit(number: number, value: number): void {
    let account = this.searchInArray(number);

    if (account != null) {
      account.deposit(value);
      console.log(
        colors.fg.green,
        "\n O Deposito na conta numero: " +
          number +
          " foi efetuado com sucesso!",
        colors.reset
      );
    } else
      console.log(
        colors.fg.red,
        "\nA Conta numero: " + number + " não foi encontrada!",
        colors.reset
      );
  }
  public transfer(
    sourceNumber: number,
    destinationNumber: number,
    value: number
  ): void {
    let originAccount = this.searchInArray(sourceNumber);
    let destinationAccount = this.searchInArray(destinationNumber);

    if (originAccount != null && destinationAccount != null) {
      if (originAccount.withdraw(value) == true) {
            destinationAccount.deposit(value);
            console.log(
              colors.fg.green,
              "\nA Transferencia da conta numero: " +
                sourceNumber +
                " para a Conta numero: " +
                destinationNumber +
                " foi efetuada com sucesso!",
              colors.reset
            );
      }
    } else
      console.log(colors.fg.red,
        "\nA Conta numero: " + originAccount + "  e/ou a conta Numero: " + destinationAccount + " não foram encontradas!!", colors.reset);
  }

  public generatorNumber(): number {
    return ++this.number;
  }

  //Checar se ha conta existe
  public searchInArray(number: number): Account | null {
    for (let account of this.accountList) {
      if (account.number === number) return account;
    }
    return null;
  }
}
