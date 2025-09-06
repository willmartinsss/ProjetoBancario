import readlinesync = require("readline-sync");
import { colors } from "./utils/Colors";
import { Account } from "./Models/Account";
import { CurrentAccount } from "./Models/CurrentAccount";
import { SavingAccount } from "./Models/SavingsAccount";
import { AccountController } from "./Controllers/AccountController";

export function main() {
  let accounts: AccountController = new AccountController();

  let opcao, number, agency, type, amount, limit, birthday, value, destinationAccount: number;
  let holder: string;
  const typeAccounts = ["Conta Corrente", "Conta poupanca"];

  //contas testes
  console.log("\nCriar Contas\n");
  let cc1: CurrentAccount = new CurrentAccount(accounts.generatorNumber(), 123, 1, "João da Silva", 1000, 100.0);
  accounts.register(cc1);
  let cc2: CurrentAccount = new CurrentAccount(accounts.generatorNumber(), 124, 1, "Maria da Silva", 2000, 100.0);
  accounts.register(cc2);
  let cp1: SavingAccount = new SavingAccount(accounts.generatorNumber(), 125, 2, "Mariana dos Santos", 4000, 12);
  accounts.register(cp1);
  let cp2: SavingAccount = new SavingAccount(accounts.generatorNumber(), 125, 2, "Juliana Ramos", 8000, 15);

  accounts.register(cp2);
  accounts.listAll();
  
  while (true) {
    console.log(colors.bg.black, colors.fg.blue, "*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ", colors.reset);
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");
    if (opcao == 9) {
      colors.fg.greenstrong, console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        console.log("Digite o Número da agência: ");
        agency = readlinesync.questionInt("");
        console.log("Digite o Nome do titular da conta:  ");
        holder = readlinesync.question("");
        console.log("\nDigite o tipo da conta: ");
        type = readlinesync.keyInSelect(typeAccounts, "", { cancel: false }) + 1;
        console.log("Digite o Saldo da conta (R$): ");
        amount = readlinesync.questionFloat("");
        switch (type) {
          case 1:
            console.log("Digite o limite da Conta (R$): ");
            limit = readlinesync.questionFloat("");
            accounts.register(new CurrentAccount(accounts.generatorNumber(), agency, type, holder, amount, limit));
            break;
          case 2:
            console.log("Digite o dia do aniversario da conta poupança: ");
            birthday = readlinesync.questionInt("");
            accounts.register(new SavingAccount(accounts.generatorNumber(), agency, type, holder, amount, birthday));
            break;
        }
        keyPress();
        break;
      case 2:
        console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
        accounts.listAll();
        keyPress();
        break;
      case 3:
        console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
        console.log("Digite o número da Conta: ");
        number = readlinesync.questionInt("");
        accounts.searchByNumber(number);
        keyPress();
        break;
      case 4:
        console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
        console.log("Digite o número da Conta: ");
        number = readlinesync.questionInt("");
        let account = accounts.searchInArray(number);
        if (account != null) {
          console.log("Digite o Número da agência: ");
          agency = readlinesync.questionInt("");
          console.log("Digite o Nome do titular da conta:  ");
          holder = readlinesync.question("");
          type = account.type;
          console.log("Digite o Saldo da conta (R$): ");
          amount = readlinesync.questionFloat("");
          switch (type) {
            case 1:
              console.log("Digite o limite da Conta (R$): ");
              limit = readlinesync.questionFloat("");
              accounts.register(new CurrentAccount(accounts.generatorNumber(), agency, type, holder, amount, limit));
              break;
            case 2:
              console.log("Digite o dia do aniversario da conta poupança: ");
              birthday = readlinesync.questionInt("");
              accounts.register(new SavingAccount(accounts.generatorNumber(), agency, type, holder, amount, birthday));
              break;
          }
        } else {
          console.log(colors.fg.red, "\nA Conta número: " + number + " não foi encontrada!", colors.reset);
        }
        keyPress();
        break;
      case 5:
        console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
        console.log("Digite o número da Conta: ");
        number = readlinesync.questionInt("");
        accounts.delete(number);
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        console.log("Digite o número da conta: ");
        number = readlinesync.questionFloat("");
        console.log("\nDigite o valor do saque (R$): ");
        value = readlinesync.questionFloat("");
        accounts.withdraw(number, value);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        console.log("Digite o número da conta: ");
        number = readlinesync.questionFloat("");
        console.log("\nDigite o valor do depósito (R$): ");
        value = readlinesync.questionFloat("");
        accounts.deposit(number, value);
        keyPress();
        break;
      case 8:
        console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);
        console.log("Digite o número da conta origem: ");
        number = readlinesync.questionInt("");
        console.log("\nDigite o número da conta destino: ");
        destinationAccount = readlinesync.questionInt("");
        console.log("\nDigite o valor do depósito (R$): ");
        value = readlinesync.questionFloat("");
        accounts.transfer(number, destinationAccount, value);
        keyPress();
        break;
      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
        break;
    }
  }
}

export function sobre(): void {
  console.log(colors.bg.black, colors.fg.blue, "\n*****************************************************");
  console.log("Projeto Desenvolvido por: William Martins De Almeida");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log("*****************************************************", colors.reset);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
