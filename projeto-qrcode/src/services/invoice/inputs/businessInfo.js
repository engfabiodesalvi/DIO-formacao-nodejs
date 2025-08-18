import chalk from "chalk";
import prompt from "prompt";
import promptSchemaInvoice from "../../../prompts-schema/prompt-schema-invoice.js"

export default async function getBusinessInfo(data) {

    let dataBusiness = {...data};    
    let promptSchema = {
        name: promptSchemaInvoice['business'][3].name,
        description: promptSchemaInvoice['business'][3].description,
        required:  promptSchemaInvoice['business'][3].required
    };

    //console.log(JSON.stringify(dataBusiness, null, 2));

    console.log(chalk.yellow.bold( "\n# Entre com os dados comercias #"))

    dataBusiness['logo'] = process.env.PATH_LOGO;

    promptSchema['description'] += 
        chalk.blue.italic(`\n(Tecle ENTER para: ${dataBusiness['logo']})\n:`);

    // assyncronous
    dataBusiness['name'] = (
        await prompt.get(promptSchemaInvoice['business'][0])
    ).name;

    dataBusiness['address'] = (
        await prompt.get(promptSchemaInvoice['business'][1])
    ).address;

    dataBusiness['taxId'] = (
        await prompt.get(promptSchemaInvoice['business'][2])
    ).taxId;

    dataBusiness['logo'] = (
        await prompt.get(promptSchema)
    ).logo;    
    
    //console.log(JSON.stringify(promptSchemaInvoice['business'], null, 2));

    //console.log(JSON.stringify(dataBusiness, null, 2));

    return {
        name: dataBusiness.name || "no name",
        address: dataBusiness.address || "no address",
        taxId: dataBusiness.taxId || "n/a", // CPF/CNPJ
        logo: dataBusiness.logo || process.env.PATH_LOGO, // if typed ENTER
    };
};