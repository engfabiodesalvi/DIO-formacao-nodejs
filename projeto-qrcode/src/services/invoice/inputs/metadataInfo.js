import generateInvoiceDate from "../processing/dataGenerator.js";
import generateInvoiceNumber from "../processing/numberGenerator.js";
import promptSchemaInvoice from "../../../prompts-schema/prompt-schema-invoice.js";
import chalk from "chalk";
import prompt from "prompt";

export async function getMetadataInfo(data) {
    let dataMetadata = {...data};
    let promptSchema = [
        {
            name: promptSchemaInvoice['metadata'][0].name,
            description: promptSchemaInvoice['metadata'][0].description,
            required: promptSchemaInvoice['metadata'][0].required,
            message: promptSchemaInvoice['metadata'][0].message,
        },
        {
            name: promptSchemaInvoice['metadata'][1].name,
            description: promptSchemaInvoice['metadata'][1].description,
            required: promptSchemaInvoice['metadata'][1].required,
            message: promptSchemaInvoice['metadata'][1].message,
        }
    ];
    const generateNumber = generateInvoiceNumber();
    const generateDate = generateInvoiceDate();

    //console.log(JSON.stringify(dataMetadata, null, 2));

    console.log(chalk.yellow.bold( "\n# Entre com os metadados do pedido #"))

    dataMetadata['number'] = generateNumber;
    dataMetadata['date'] = generateDate;

    promptSchema[0]['description'] += 
        chalk.blue.italic(`(Tecle ENTER para: ${dataMetadata['number']}):`);
    promptSchema[1]['description'] +=
        chalk.blue.italic(`(Tecle ENTER para: ${dataMetadata['date']}):`);

    // assyncronous
    dataMetadata['number'] = (
        await prompt.get(promptSchema[0])
    ).number;

    dataMetadata['date'] = (
        await prompt.get(promptSchema[1])
    ).date;
    
    return {
        number: dataMetadata.number || generateNumber,  // if typed ENTER
        date: dataMetadata.date || generateDate,        // if typed ENTER
    };
};

export default getMetadataInfo;
//Date().toISOString()
//2025-08-16T21:31:00.000Z 

// metada means "data about data".