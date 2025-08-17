import chalk from "chalk";
import formatMsg from "./utils/format-msg.js";
import createQRCode from "../qr-code/create.js";
import createPassword from "../password/create.js";

async function itensMenu(select) {
    if (select === '3') {
      console.log(await formatMsg("(3 - Fatura)", chalk.magenta.italic));
          
    };
    if (select === '2') {
      console.log(await formatMsg("(2 - PASSWORD)", chalk.magenta.italic));
      await createPassword();
    };   
    if (select === '1') {
      console.log(await formatMsg("(1 - QRCODE)", chalk.magenta.italic));
      await createQRCode();
    };  
}

// assynchronous prompt
async function selectMenu(select) {
    await itensMenu(select);
};

// synchronous prompt
async function promptSelectMenu(error, choose) {
    await itensMenu(choose.select);
};

export default selectMenu;
export {
    selectMenu,
    promptSelectMenu
}