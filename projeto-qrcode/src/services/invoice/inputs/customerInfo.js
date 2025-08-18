import chalk from "chalk";
import prompt from "prompt";
import promptSchemaInvoice from "../../../prompts-schema/prompt-schema-invoice.js";

export default async function getCustomerInfo(data) {
    let dataCostumer = {...data};  

    //console.log(JSON.stringify(dataCostumer, null, 2));

    console.log(chalk.yellow.bold( "\n# Entre com os dados do cliente #"))
    
    prompt.start()

    // assyncronous
    dataCostumer['name'] = (await prompt.get(promptSchemaInvoice['customer'][0])).name;
    dataCostumer['address'] = (await prompt.get(promptSchemaInvoice['customer'][1])).address;

    //console.log(JSON.stringify(promptSchemaInvoice['customer'], null, 2));

    //console.log(JSON.stringify(dataCostumer, null, 2));

    return {
        name: dataCostumer.name || "sem cliente",
        address: dataCostumer.address || "sem endereço",
    }
}