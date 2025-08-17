export default function getBusinessInfo(data) {
    return {
        name: data.name || "no name",
        address: data.address || "no address",
        taxId: data.taxId || "n/a",
        lgo: data.logo || null,
    };
};