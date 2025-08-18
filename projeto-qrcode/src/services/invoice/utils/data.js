export const invoiceData = {
  business: {
    name: "Fabio's E-Shop",
    address: "123 Market St, São Paulo, Brazil",
    taxId: "123.456.789-00", // CPF/CNPJ in Brazil
    logo: "logo.png", // optional
  },
  customer: {
    name: "John Doe",
    address: "456 Customer Ave, Rio de Janeiro, Brazil",
  },
  metadata: {
    number: "INV-2025-001",
    date: "2025-08-16",
  },
  items: [
    { description: "Wireless Mouse", quantity: 2, price: 80 },
    { description: "Mechanical Keyboard", quantity: 1, price: 350 },
    { description: "USB-C Hub", quantity: 3, price: 120 },
  ],
  payment: {
    method: "PIX",
    link: "https://example.com/pay/INV-2025-001",
  },
  taxRate: 10, // percent
  subtotal: 0,
  tax: 0,
  total: 0,
};

export const invoiceDataEmpty = {
  business: {
    name: "",
    address: "",
    taxId: "", // CPF/CNPJ in Brazil
    logo: "", // optional
  },
  customer: {
    name: "",
    address: "",
  },
  metadata: {
    number: "",
    date: "",
  },
  items: [],
  payment: {
    method: "",
    link: "",
  }, 
  taxRate: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
  payment: {
    method: "",
    link: "",
  }
}

export const itemDataEmpty = {
  description: "",
  quantity: 0,
  price: 0
}

export default invoiceData;
export {
    
}