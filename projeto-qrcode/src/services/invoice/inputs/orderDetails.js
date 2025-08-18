
import prompt from "prompt";
import chalk from "chalk";
import { promptSchemaInvoice } from "../../../prompts-schema/prompt-schema-invoice.js";
import { itemDataEmpty } from "../utils/data.js";

export async function getOrderDetails(items = []) {

    let itemsData = [...items];
    let itemData = [];

    //console.log(JSON.stringify(itemsData, null, 2));

    console.log(chalk.blue.bold.underline( "\n# Entre com os itens do pedido #"));

    let inputOption = 1;
    while(inputOption == 1) {

        inputOption = (
            await prompt.get(promptSchemaInvoice['items'][0])
        ).question;

        if (inputOption == 1) {
            itemData = itemDataEmpty;

            console.log(chalk.yellow.bold.underline( "\n>> Adicionando item ao pedido"));  

            itemData['description'] = (
                await prompt.get(promptSchemaInvoice['items'][1])
            ).description;

            itemData['quantity'] = parseInt(
                    (await prompt.get(promptSchemaInvoice['items'][2])
            ).quantity);   

            itemData['price'] =
                parseInt(parseFloat(
                    (await prompt.get(promptSchemaInvoice['items'][3])                
                ).price) * 100) / 100;

            //console.log(JSON.stringify(itemData, null, 2));            
            itemsData.push({...itemData});
        }

    }
    
    return [ ...itemsData];
};

export default getOrderDetails;