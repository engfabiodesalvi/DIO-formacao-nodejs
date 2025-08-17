let counter = 1;

export default function generateInvoiceNumber(prefix = "INV") {
    const now = new Date();
    return `${prefix}-${now.getFullYear()}-${String(counter++).padStart(3, "0")}`;
}