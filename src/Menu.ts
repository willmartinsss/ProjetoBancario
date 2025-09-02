import readlinesync = require("readline-sync");
import { colors } from "./utils/Colors";
import { Account } from "./Models/Account";
import { CurrentAccount } from "./Models/CurrentAccount";
import { SavingAccount } from "./Models/SavingsAccount";

export function main() {
  let opcao: number;

  //teste
  const account = new Account("Adriana", 123, 1, 1, 1000);
  account.visualize();
  account.withdraw(10500);
  account.visualize();
  account.deposit(5000);
  account.visualize();

  // Objeto da Classe ContaCorrente (Teste)
  const currentAccount: CurrentAccount = new CurrentAccount("Mariana", 123, 2, 1, 15000, 1000);
  currentAccount.visualize();
  currentAccount.withdraw(2000);
  currentAccount.visualize();
  currentAccount.deposit(1000);
  currentAccount.visualize();

  // Objeto da Classe ContaPoupanca (teste)
  const savingAccount: SavingAccount = new SavingAccount("Victor", 123, 3, 2, 1000, 10);
  savingAccount.visualize();
  savingAccount.withdraw(200);
  savingAccount.visualize();
  savingAccount.deposit(1000);
  savingAccount.visualize();

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.blue,
      "*****************************************************"
    );
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
    console.log(
      "                                                     ",
      colors.reset
    );

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      colors.fg.greenstrong,
        console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );

        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );

        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );

        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );

        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );

        break;
      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log(
    colors.bg.black,
    colors.fg.blue,
    "\n*****************************************************"
  );
  console.log("Projeto Desenvolvido por: William Martins De Almeida");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log(
    "*****************************************************",
    colors.reset
  );
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
