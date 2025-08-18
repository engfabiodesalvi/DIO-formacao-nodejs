import generateInvoiceDate from "../processing/dataGenerator.js";
import generateInvoiceNumber from "../processing/numberGenerator.js";
import promptSchemaInvoice from "../../../prompts-schema/prompt-schema-invoice.js";
import chalk from "chalk";
import prompt from "prompt";

export async function getPaymentInfo(data) {
    let dataPayment = {...data['payment']};
    let promptSchema = {...promptSchemaInvoice['payment']};

    console.log(chalk.yellow.bold( "\n# Entre com os dados de pagamento #"))

    prompt.start()

    dataPayment['method'] = "PIX";
    dataPayment['link'] = `https://example.com/pay/${data['metadata']['number']}`;

    console.log(JSON.stringify(dataPayment, null, 2));

    promptSchema[0]['description'] += 
        chalk.blue.italic(`\n(Tecle ENTER para: ${dataPayment['method']})\n:`);
    promptSchema[1]['description'] +=
        chalk.blue.italic(`\n(Tecle ENTER para: ${dataPayment['link']})\n:`);

    // assyncronous
    dataPayment['method'] = (
        await prompt.get(promptSchema[0])
    ).method;

    dataPayment['description'] = (
        await prompt.get(promptSchema[1])
    ).link;

    return {
        number: dataPayment.method || "PIX",
        link: dataPayment.link || `https://example.com/pay/${data['metadata']['number']}`,
    };
};

export default getPaymentInfo;
