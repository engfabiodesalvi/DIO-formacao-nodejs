import fs from "fs";
import PDFDocument from "pdfkit";

async function exportInvoicePDF(invoice, qrBuffer, path) {
    let doc = new PDFDocument({ margin: 50 });
    doc.pipe(fs.createWriteStream(path));

    // header
    if (invoice.business.logo && fs.existsSync(invoice.business.logo)) {
        doc.image(invoice.business.logo, 50, 45, { width: 100});
    }

    doc
        .fontSize(20)
        .text(invoice.business.name, 160, 50, { align: "left" })
        .moveDown(0.5)
        .fontSize(10)
        .text(invoice.business.address, 160, 75)
        .text(`Tax ID: ${invoice.business.taxId}`, 160, 90)
        .moveDown();

    doc.moveDown(2);

    // customer info
    doc
        .fontSize(12)
        .text(`Invoice Number: ${invoice.metadata.number}`, { align: "right" })
        .text(`Invoice Date: ${invoice.metadata.date}`, { align: "right" })
        .moveDown()
        .fontSize(12)
        .text(`Bill To:`)
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
        .text("Descrition", itemX, tableTop)
        .text("Qty", qtyX, tableTop)
        .text("Unit PriceX", priceX, tableTop)
        .text("Subtotal", subtotalX, tableTop);

    let rowY = tableTop + 20;

    invoice.items.forEach((item) => {
        doc
            .fontSize(10)
            .text(item.description, itemX, rowY)
            .text(item.quantity, qtyX, rowY)
            .text(`$${item.price.toFixed(2)}`, priceX, rowY)
            .text(`$${(item.quantity * item.price).toFixed(2)}`, subtotalX, rowY);
        rowY += 20;        
    });

    // totals
    rowY += 20;
    doc
        .fontSize(12)
        .text(`Subtotal: $${invoice.subtotal.toFixed(2)}`, subtotalX, rowY)
        .text(`Tax: $${invoice.tax.toFixed(2)}`, subtotalX, rowY + 20)
        .text(`Total: $${invoice.total.toFixed(2)}`, subtotalX, rowY + 40);

    // QR code
    if (qrBuffer) {
        doc.moveDown(6);
        doc.fontSize(12).text("Scan to Pay:", { align: "left" });
        doc.image(qrBuffer, { width: 120, height: 120, align: "left" });
    }

    // footer
    doc
        .moveDown(2)
        .fontSize(10)
        .text("Thank you you fr your business!", { align: "center"});
}

export {
    exportInvoicePDF,
};