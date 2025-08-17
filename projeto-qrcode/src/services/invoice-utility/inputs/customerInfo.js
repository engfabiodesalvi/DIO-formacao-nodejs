export default function getCustomerInfo(data) {
    return {
        name: data.name || "customer",
        address: data.address || "no address",
    }
}