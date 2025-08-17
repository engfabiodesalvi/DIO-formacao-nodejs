import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold(" Digite o link para gerar o QR CODE:\n"),
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      " Escolha entre o tipo de QRcode (1 - NORMAL) ou (2 - TERMINAL):\n"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
