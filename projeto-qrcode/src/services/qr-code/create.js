import prompt from "prompt";
//import promptQRCode from "../../prompts/prompt-qrcode.js";
//import handle from "./handle.js";

import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";
import chalk from "chalk";

async function createQRCode() {

  console.log(chalk.blue.bold.underline("\n## Gerador de QRCode ##"));

  prompt.start();

  // syncronous - problems working inside other syncronus prompt
  //prompt.get(promptSchemaQRCode, handle);
  //prompt.get(promptQRCode, handle);

  // assyncronous
  const promptInput = await prompt.get(promptSchemaQRCode);
  await handle(promptInput);

}

export default createQRCode;
