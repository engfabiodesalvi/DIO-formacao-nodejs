export default function generateInvoiceDate() {
    const now = new Date();
    return `${now.toISOString().split("T")[0]}`;
}