
import prompt from "prompt";
import chalk from "chalk";
import { promptSchemaInvoice } from "../../../prompts-schema/prompt-schema-invoice.js";

export async function getTaxRate(data) {

    let dataTaxRate = {...data};

    //console.log(JSON.stringify(dataTaxRate, null, 2));

    console.log(chalk.blue.bold.underline( "\n>> Defina a taxa de juros"));

    dataTaxRate['taxRate'] = parseInt(
            (await prompt.get(promptSchemaInvoice['taxRate'])
    ).taxRate);   
    
    //console.log(JSON.stringify(dataTaxRate, null, 2));                      
    
    return  dataTaxRate.taxRate || parseInt(process.env.TAX_RATE) ;
};

export default getTaxRate;