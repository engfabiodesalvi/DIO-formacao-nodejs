import fs from "fs";
import PDFDocument from "pdfkit";

async function exportInvoicePDF(invoice, qrBuffer, path) {
    let doc = new PDFDocument({ margin: 50 });
    doc.pipe(fs.createWriteStream(path));

    // header
    //console.log(invoice.business.logo)
    //console.log(fs.existsSync(invoice.business.logo));
    
    // company logo
    if (invoice.business.logo && fs.existsSync(invoice.business.logo)) {
        doc.image(invoice.business.logo, 50, 45, { width: 100});
    }

    doc
        .fontSize(20)
        .text(invoice.business.name, 160, 50, { align: "left" })
        .moveDown(0.5)
        .fontSize(10)
        .text(invoice.business.address, 160, 75)
        .text(`CPF/CNPJ: ${invoice.business.taxId}`, 160, 90) // Tax ID (EUA) // CPF/CNPJ (Brazil)
        .moveDown();

    doc.moveDown(2);

    // customer info
    doc
        .fontSize(12)
        .text(`Número da fatura: ${invoice.metadata.number}`, { align: "right" }) // Invoice number
        .text(`Data da fatura: ${invoice.metadata.date}`, { align: "right" })     // Invoice date
        .moveDown()
        .fontSize(12)
        .text(`Fatura para:`) // Bill t
        .text(invoice.customer.name)
        .text(invoice.customer.address)
        .moveDown();

    // table header
    const tableTop = doc.y;
    const itemX = 50;
    const qtyX = 300;
    const priceX = 370;
    const subtotalX = 460;
    
    doc
        .fontSize(12)
        .text("Descrição", itemX, tableTop)
        .text("Qtd", qtyX, tableTop)
        .text("Preço Unit.", priceX, tableTop)
        .text("Subtotal", subtotalX, tableTop);

    let rowY = tableTop + 20;

    invoice.items.forEach((item) => {
        //console.log(JSON.stringify(item));
        doc
            .fontSize(10)
            .text(item.description, itemX, rowY)
            .text(item.quantity, qtyX, rowY)
            .text(`R$ ${item.price.toFixed(2)}`, priceX, rowY)
            .text(`R$ ${(item.quantity * item.price).toFixed(2)}`, subtotalX, rowY);
        rowY += 20;        
    });

    // totals
    rowY += 20;
    const totalsX = 400;
    doc
        .fontSize(12)
        .text(`Subtotal: R$ ${invoice.subtotal.toFixed(2)}`, totalsX, rowY)
        .text(`Juros: R$ ${invoice.tax.toFixed(2)}`, totalsX, rowY + 20)
        .text(`Total: R$ ${invoice.total.toFixed(2)}`, totalsX, rowY + 40);

    // QR code
    if (qrBuffer) {
        doc.moveDown(6);
        doc.fontSize(12).text("Digitalize para pagar:", { align: "left" }); // Scan to pay
        doc.image(qrBuffer, { width: 120, height: 120, align: "left" });
    }

    // footer
    doc
        .moveDown(2)
        .fontSize(10)
        .text("Obrigado pela sua preferência!", { align: "center"}); // Thank you for your business!

    // end file
    doc.end();
}

export {
    exportInvoicePDF,
};