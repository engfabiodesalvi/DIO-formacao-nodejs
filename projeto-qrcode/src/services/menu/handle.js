import chalk from "chalk";
import formatMsg from "./utils/format-msg.js";
import createQRCode from "../qr-code/create.js";
import createPassword from "../password/create.js";
import exampleInvoice from "../invoice/utils/example.js"; 
import generateInvoice from "../invoice/index.js";

async function handle(promptResult) {
    if (promptResult.err) {
        console.log("error on application");
        return;
    }

    if (promptResult === '3') {
      console.log(await formatMsg("(3 - Fatura)", chalk.magenta.italic));
      await generateInvoice();
    };
    if (promptResult === '2') {
      console.log(await formatMsg("(2 - PASSWORD)", chalk.magenta.italic));
      await createPassword();
    };   
    if (promptResult === '1') {
      console.log(await formatMsg("(1 - QRCODE)", chalk.magenta.italic));
      await createQRCode();
    };      
}

export { handle };