import chalk from "chalk";
import createQRCode from "../services/qr-code/create.js";
import createPassword from "../services/password/create.js";

const promptSchemaMain = [
  {    
      name: "select",
      description: `${chalk.blue.bold.underline(
        "### Utilidades para e-commerce! ###\n## Escolha a ferramenta ##\n"
    )}${chalk.yellow.bold(
        ">> Geradores de:\n3 - Fatura\n2 - PASSWORD\n1 - QRCode\n0 - Sair\n"
    )}`,
      pattern: /^[0-3]+$/, // REGEX syntax
      message: chalk.red.italic("Escolha apenas entre 0 a 3."),
      required: true,
    },
  ];

export default promptSchemaMain;
export {
  promptSchemaMain
};

//line above the prompt
//prompt $P$_$G