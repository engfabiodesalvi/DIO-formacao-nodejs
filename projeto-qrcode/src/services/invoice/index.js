import getBusinessInfo from "./inputs/businessInfo.js";
import getCustomerInfo from "./inputs/customerInfo.js";
import getOrderDetails from "./inputs/orderDetails.js";
import getMetadataInfo from "./inputs/metadataInfo.js";
import getTaxRate from "./inputs/taxRate.js";

import generateInvoiceNumber from "./processing/numberGenerator.js";
import calculateTotals from "./processing/calculations.js";
import chooseTemplate from "./processing/templateEngine.js";

import generateQrBuffer from "./outputs/qrCodeGenerator.js";
import { exportInvoicePDF } from "./outputs/pdfExporter.js";
import chalk from "chalk";
import invoiceData, { invoiceDataEmpty } from "./utils/data.js";
import { getPaymentInfo } from "./inputs/paymentInfo.js";
import getPathFile from "./utils/pathInvoicePDF.js";
import getNameFile from "./utils/nameInvoicePDF.js";


// async function startInvoice(option) {
//   const newInvoiceData = [];
//   const outputPath = "./download/pdf/";
  
//   await generateInvoice(newInvoiceData, outputPath)
// }

//async function generateInvoice(data, outputPath) {
async function generateInvoice(dataInvoice = invoiceDataEmpty) {

  //dataInvoice = invoiceData; // example data

  console.log(chalk.blue.bold.underline("\n## Gerador de Faturas ##"));

  //console.log(JSON.stringify(dataInvoice, null, 2));
  
  // Collect Inputs
  dataInvoice['business'] = await getBusinessInfo(dataInvoice['business']); 
  dataInvoice['customer'] = await getCustomerInfo(dataInvoice['customer']);
  dataInvoice['metadata'] = await getMetadataInfo(dataInvoice['metadata']);
  dataInvoice['items'] = await getOrderDetails(dataInvoice['items']);
  dataInvoice['taxRate'] = await getTaxRate(dataInvoice['taxRate']);
  dataInvoice['payment'] = await getPaymentInfo(dataInvoice);
  //console.log(JSON.stringify(dataInvoice['items'], null, 2));
  

  // Processing
  const totals = calculateTotals(dataInvoice['items'], dataInvoice.taxRate || parseInt(process.env.TAX_RATE));
  dataInvoice['subtotal'] = totals['subtotal']; // total without taxes
  dataInvoice['tax'] = totals['tax'];           // total taxes
  dataInvoice['total'] = totals['total']; // total with taxes

  const template = chooseTemplate();

  //console.log(JSON.stringify(dataInvoice, null, 2));
  
  // Prepare Invoice Object
  const invoice = {
    business: dataInvoice['business'],
    customer: dataInvoice['customer'],
    items:    dataInvoice['items'],
    metadata: dataInvoice['metadata'],
    subtotal: dataInvoice['subtotal'],
    tax:      dataInvoice['tax'],
    total:    dataInvoice['total'],
    payment:  dataInvoice['payment'],
    template,
  };

  //console.log(JSON.stringify(invoice, null, 2));

  // Generate QR if payment link provided
  //console.log(JSON.stringify((invoice.payment && invoice.payment.link), null, 2));
  let qrBuffer = null;
  if (invoice.payment && invoice.payment.link) {
    qrBuffer = await generateQrBuffer(invoice.payment.link);
  }

  // Export as PDF
  const outputPath = getPathFile() + getNameFile(invoice['metadata']);
  await exportInvoicePDF(invoice, qrBuffer, outputPath);

}

export default generateInvoice;
