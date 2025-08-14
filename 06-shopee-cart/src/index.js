import * as cartService from "./services/cart.js";
import { getProducts, showAllProducts } from "./services/products.js"

console.log("\n-----------------------------------");
console.log("\nWelcome to the your Shopee Cart!");

const myCart = [];
const myWishList = []; 

// obtain all available products
const myProducts = await getProducts();

// show all products
console.log("\n-----------------------------------");
await showAllProducts(myProducts);

//criando dois itens
//const item1 = await createItem(0,"hotwheels ferrari",["toys"], 20.99, 5);
//const item2 = await createItem(1,"hotwheels lamborghini",["toys"], 39.99, 6);

// adicionei dois itens ao carrinho
//await cartService.addItem(myCart, item1);
//await cartService.addItem(myCart, item2);

console.log("\n-----------------------------------");
console.log("\nAdicionando produtos no carrinho.");

// simulate the plus button click 6 times
await cartService.addOneItem(myCart, myProducts[0]);
await cartService.addOneItem(myCart, myProducts[0]);
await cartService.addOneItem(myCart, myProducts[0]);
await cartService.addOneItem(myCart, myProducts[0]);
await cartService.addOneItem(myCart, myProducts[0]);
await cartService.addOneItem(myCart, myProducts[0]);
await cartService.addOneItem(myCart, myProducts[0]);

// simulate the plus button click 1 time
await cartService.addOneItem(myCart, myProducts[1]);

// simulate the plus button click 3 times
await cartService.addOneItem(myCart, myProducts[13]);

// show shopee cart list
console.log("\n-----------------------------------");
await cartService.displaycart(myCart);

// show all products
console.log("\n-----------------------------------");
await showAllProducts(myProducts);

console.log("\n-----------------------------------");
console.log("\nRemovendo produtos no carrinho.\n");

// simulate the minus button click 1 time
await cartService.removeOneItem(myCart, myProducts[0]);
await cartService.removeOneItem(myCart, myProducts[0]);
await cartService.removeOneItem(myCart, myProducts[0]);
await cartService.removeOneItem(myCart, myProducts[0]);
await cartService.removeOneItem(myCart, myProducts[0]);
await cartService.removeOneItem(myCart, myProducts[0]);

// simulate the minus button click 1 time
await cartService.removeOneItem(myCart, myProducts[1]);
await cartService.removeOneItem(myCart, myProducts[1]);
await cartService.removeOneItem(myCart, myProducts[1]);
await cartService.removeOneItem(myCart, myProducts[1]);
await cartService.removeOneItem(myCart, myProducts[1]);
await cartService.removeOneItem(myCart, myProducts[1]);
await cartService.removeOneItem(myCart, myProducts[1]);



//myProducts[0].quantity = 0;
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

// show shopee cart list
console.log("\n-----------------------------------");
await cartService.displaycart(myCart);

// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
//await cartService.calculateTotal(myCart);

// show all products
console.log("\n-----------------------------------");
await showAllProducts(myProducts);