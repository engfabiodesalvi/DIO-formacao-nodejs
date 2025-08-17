export default function getMetadata(data) {
    return {
        number: data.number || "INV-0001",
        date: date.date || new Date().toISOString.split("T")[0],
    };
};

//Date().toISOString()
//2025-08-16T21:31:00.000Z 

// metada means "data about data".