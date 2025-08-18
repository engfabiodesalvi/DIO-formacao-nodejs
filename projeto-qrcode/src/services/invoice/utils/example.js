
import generateInvoice from "../index.js";
import getNameFile from "./nameInvoicePDF.js";
import invoiceData from "./data.js";
import getPathFile from "./pathInvoicePDF.js";

async function exampleInvoice() {
    const pathFile = getPathFile() + getNameFile(invoiceData.metadata.number);
    //console.log(time);
    await generateInvoice(invoiceData, pathFile).then(() =>
      console.log(`Invoice generated: ${pathFile}`)
    );
}

export default exampleInvoice;
