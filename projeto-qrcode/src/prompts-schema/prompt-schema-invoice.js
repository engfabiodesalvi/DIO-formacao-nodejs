import chalk from "chalk";

export const promptSchemaInvoice = {
     
    business: [
        {
            name: "name",
            description: chalk.yellow.bold( "Nome:"),
            required: true,
            message: chalk.red.italic("Obrigatótio"),
        },
        {
            name: "address",
            description: chalk.yellow.bold( "Endereço:"),    
            required: true,    
            message: chalk.red.italic("Obrigatótio"),
        },
        {
            name: "taxId", // CPF/CNPJ in Brazil
            description: chalk.yellow.bold( "CPF/CNPJ:"), 
            required: true,
            message: chalk.red.italic("Obrigatótio"),
        },
        {
            name: "businessLogo",
            description: chalk.yellow.bold( "Logotipo(opcional):"), 
            required: false,        
        },
    ],   
    
    customer: [
        {
            name: "name",
            description: chalk.yellow.bold( "Nome:"),
            required: true,
            message: chalk.red.italic("Obrigatótio"),
        },
        {
            name: "address",
            description: chalk.yellow.bold( "Endereço:"),    
            required: true,    
            message: chalk.red.italic("Obrigatótio"),
        },
    ],

    metadata: [
        {
            name: "number",
            description: chalk.yellow.bold( "Número "),
            required: false,
            message: chalk.red.italic("Obrigatótio"),
            default: "",
        },
        {
            name: "date",
            description: chalk.yellow.bold( "Data "),    
            required: false,    
            message: chalk.red.italic("Obrigatótio"),
            default: "",            
        },
    ],
    
    items: [
        {
            name: "question",
            description: chalk.yellow.bold(">> Adicionar item?\n(1 - SIM) (2 - NÃO)\nDigite a opção desejada:"),
            pattern: /^[1-2]+$/, // REGEX syntax
            message: chalk.red.italic("Escolha apenas entre 1 ou 2."),
            required: true,            
        },
        {
            name: "description",
            description: chalk.yellow.bold( "Descrição:"),
            required: true,
            message: chalk.red.italic("(Entre com a descrição do produto)"),
        },   
        {
            name: "quantity",
            description: chalk.yellow.bold( "Quantidade:"),
            pattern: /^\d+$/, // REGEX syntax for integer number
            message: chalk.red.italic("(Entre com um valor inteiro.)"),
            required: true,             
        },
        {
            name: "price",
            description: chalk.yellow.bold( "Preço unitário:"),
            pattern: /^(?:[1-9]\d*|0\.\d*[1-9]\d*)(?:\.\d+)?$/, // REGEX syntax for positive floating numbers
            message: chalk.red.italic("Entre com um valor decimal."),
            required: true,   
        },                     
    ],

    taxRate: [
        {
            name: "taxRate",
            description: chalk.yellow.bold( "Taxa de juros (%):"),
            pattern: /^\d+$/, // REGEX syntax for integer number
            message: chalk.red.italic("(Entre com um valor inteiro.)"),
            required: true,   
        },          
    ],

    payment: [
        {
            name: "method",
            description: chalk.yellow.bold( "Método de pagamento (PIX, cartão):"),
            required: false,
            message: chalk.red.italic("Obrigatótio"),
        },  
        {
            name: "link",
            description: chalk.yellow.bold( "Link de pagamento ou forma de pagamento ('http://.../file.pdf' ou '6x no cartão crédito' ou 'á vista no cartã de débito'):"),
            required: false,
            message: chalk.red.italic("Obrigatótio"),
        },          
    ],
};

export default promptSchemaInvoice;