export default function calculateTotals(items, taxRate = 0.1) {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return { subtotal, tax, total };
}