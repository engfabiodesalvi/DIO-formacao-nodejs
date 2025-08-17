import qr from "qrcode-terminal";
import chalk from "chalk";

//async function handle(err, result) {
async function handle(promptResult) {
  const err = promptResult['err'];
  const result = promptResult['result'];

  //console.log(JSON.stringify(promptResult, null, 2));
  
  if (promptResult.err) {
    console.log("error on application");
    return;
  }

  const isSmall = promptResult.type == 2;
  if (promptResult.type == 2)
    console.log(chalk.magenta.italic("(2 - TERMINAL)"));
  else
    console.log(chalk.magenta.italic("(1 - NORMAL)"));

  qr.generate(promptResult.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:"));
    console.log(qrcode);
  });
}

export default handle;

// handle -> lidar, manipular
