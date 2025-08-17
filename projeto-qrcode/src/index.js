import prompt from "prompt";

//import mainPrompt from "./prompts/prompt-main.js"
import chalk from "chalk";


//import { promptSchemaMain, promptServiceSelect } from "./prompts-schema/prompt-schema-main.js";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import { selectMenu, promptSelectMenu } from "./services/menu/menu.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {

  // defining initial settings
  const promptOptions = {message: " ", delimiter: chalk.yellow.bold("->")};
  prompt.start(promptOptions);
  
  // for synchrnous use
  //prompt.get(promptSchemaMain, promptSelectMenu);

  
  // for asynchronus use

  let inputPrompt = []

  // Do until input is non-zero 
  while (inputPrompt['select'] !== '0') {
    console.log("\n");
    inputPrompt = await prompt.get(promptSchemaMain);
    await selectMenu(inputPrompt['select']);
    //console.log(`${inputPrompt['select']} - ${inputPrompt['select'] !== '0'}`);
  }
  
  //prompt.pause()

  //console.log(inputPrompt);

  /*
  prompt.get(promptSchemaMain, async function(err, choose) { //functon(err , result)
    if (choose.select === '1') {
      console.log("(1-QRCODE)");
      await createQRCode();    
    };
    if (choose.select === '2') {
      console.log("(2-PASSWORD)")
      await createPassword();
    };    
  });
  */

  // prompt.get(mainPrompt, function(err, choose) { //functon(err , result)
  //   if (choose.select === '1') console.log("escolheu o QRCODE");
  //   if (choose.select === '2') console.log("escolheu o PASSWORD");
  // });

  // or

  // prompt.get(mainPrompt, async (err, choose) => {
  //   if (choose.select === '1') console.log("escolheu o QRCODE");
  //   if (choose.select === '2') console.log("escolheu o PASSWORD");    
  // });


  // prompt.get(promptSchemaMain, async (err, choose) => {
  //   if (err) console.log(err);

  //   if (choose.select == 1) await createQRCode();
  //   if (choose.select == 2) await createPassword();
  // });

}

main();


// Idéias de modificação
// - função que retorna um objeto de produto
// - fazer o 'prompts schemas' conversar direto com 'services' - Ok for synchronous use
// - uma pasta de serviços chama main
// - função calcular taxas de entregas ecommerce
// 

// Refatoração -> organizar o código, padronizar
// pesquisar por 'extract method'
// padronização semântica -> utilizar de variavéis, constantes, arquivos, pastas seguindo o padrão constante nas packages sempre que possível!!!!
// Ajuda a compreender seus usos no software!




