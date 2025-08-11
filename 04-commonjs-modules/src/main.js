// Modified by Fabio Toledo Bonemer De Salvi
//const p = require("./services/products");
//const product = require("./services/products");

// Desctructuring
const { getFullName, productType } = require("./services/products");
const products = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");

const Square = require("./services/square");
const mySquare = new Square(2);

async function main() {
  console.log("carrinho compras:");

  // console.log("ola meu nome é system")
  // p.getFullName("408", "mousepad");
  // p.getFullName("508", "mousepad");
  // p.getProductLabel("mousepad");

  //console.log(config.devArea.production);
  //console.log(config.client);

  



  getFullName("1", "teclado");
  products.getFullName("1", "teclado");

  //console.log(productType);

  //product.getFullName("408", "mousepad");
  // product.getFullName("508", "mouse");
  // product.getProductLabel("mousepad");

  database.connectToDatabase("my-data");

  console.log(`\nThe area of mySquare is ${mySquare.area()}.`);
}

main();
