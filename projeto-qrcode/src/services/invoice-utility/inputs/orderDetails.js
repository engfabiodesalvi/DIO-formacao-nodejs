export default function getOrderDetails(items = []) {
    return items.map((item) => ({
        description: item.description || "item",
        quantity: item.description || 1,
        price: item.price || 0,
    }));
};