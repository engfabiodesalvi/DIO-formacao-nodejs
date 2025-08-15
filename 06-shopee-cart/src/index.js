import * as cartService from "./services/cart.js";
import * as wishService from "./services/wishlist.js";
import { findItemByCode } from "./services/findItem.js";
import { getProducts, showAllProducts } from "./services/products.js";

console.log("\n-----------------------------------");
console.log("\nWelcome to the your Shopee Cart!");

const myCart = [];
const myWishList = []; 

// obtain all available products
const myProducts = await getProducts();

// show all products
console.log("\n-----------------------------------");
await showAllProducts(myProducts, "name");

//criando dois itens
//const item1 = await createItem(0,"hotwheels ferrari",["toys"], 20.99, 5);
//const item2 = await createItem(1,"hotwheels lamborghini",["toys"], 39.99, 6);

// adicionei dois itens ao carrinho
//await cartService.addItem(myCart, item1);
//await cartService.addItem(myCart, item2);

console.log("\n-----------------------------------");
console.log("\nAdicionando produtos ao carrinho.\n");

/*
const item1 = await findItemByCode(myProducts, 18);
if (item1 !== null) {
    console.log(`\n\n${item1.code} - ${item1.name} - ${item1.category}`);
}*/

// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 0));
await cartService.addItems(myCart, findItemByCode(myProducts, 0), 5);


// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 1));
await cartService.addItems(myCart, findItemByCode(myProducts, 1), 2);

// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 13));
await cartService.addItems(myCart, findItemByCode(myProducts, 13), 2);


// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 10));
await cartService.addItems(myCart, findItemByCode(myProducts, 10), 6);

// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 2));
await cartService.addItems(myCart, findItemByCode(myProducts, 2), 3);

// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 5));
await cartService.addItems(myCart, findItemByCode(myProducts, 5), 5);

// simulate the plus button click
await cartService.addOneItem(myCart, findItemByCode(myProducts, 16));
await cartService.addItems(myCart, findItemByCode(myProducts, 16), 7);


// show shopee cart list
console.log("\n-----------------------------------");
await cartService.displaycart(myCart);

// show all products
console.log("\n-----------------------------------");
await showAllProducts(myProducts, "code");

console.log("\n-----------------------------------");
console.log("\nRemovendo produtos no carrinho.\n");

// simulate the minus button click
await cartService.removeOneItem(myCart, findItemByCode(myProducts, 1));
await cartService.removeItems(myCart, findItemByCode(myProducts, 1), 1);

// simulate the minus button click
await cartService.removeOneItem(myCart, findItemByCode(myProducts, 13));
await cartService.removeItems(myCart, findItemByCode(myProducts, 13), 4);

// simulate the minus button click
await cartService.removeOneItem(myCart, findItemByCode(myProducts, 5));
await cartService.removeItems(myCart, findItemByCode(myProducts, 5), 4);

// simulate the minus button click
await cartService.removeOneItem(myCart, findItemByCode(myProducts, 16));
await cartService.removeItems(myCart, findItemByCode(myProducts, 16), 4);

// simulate the minus button click
await cartService.removeOneItem(myCart, findItemByCode(myProducts, 17));
await cartService.removeItems(myCart, findItemByCode(myProducts, 17), 1);

// simulate the minus button click
await cartService.removeOneItem(myCart, findItemByCode(myProducts, 2));
await cartService.removeItems(myCart, findItemByCode(myProducts, 2), 1);


console.log("\n-----------------------------------");
console.log("\nAdicionando produtos na lista de desejos.\n");

// simulating adding items to the wish list
await wishService.addItem(myWishList, findItemByCode(myProducts, 16));
await wishService.addItem(myWishList, findItemByCode(myProducts, 6));
await wishService.addItem(myWishList, findItemByCode(myProducts, 10));
await wishService.addItem(myWishList, findItemByCode(myProducts, 2));
await wishService.addItem(myWishList, findItemByCode(myProducts, 3));
await wishService.addItem(myWishList, findItemByCode(myProducts, 7));
await wishService.addItem(myWishList, findItemByCode(myProducts, 16));
await wishService.addItem(myWishList, findItemByCode(myProducts, 8));
await wishService.addItem(myWishList, findItemByCode(myProducts, 13));
await wishService.addItem(myWishList, findItemByCode(myProducts, 2));
await wishService.addItem(myWishList, findItemByCode(myProducts, 16));

console.log("\n-----------------------------------");

console.log("\nRemovendo produtos da lista de desejos.\n");''

// simulating removing items to the wish list
await wishService.removeItem(myWishList, findItemByCode(myProducts, 15));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 2));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 1));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 2));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 3));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 5));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 13));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 3));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 16));
await wishService.removeItem(myWishList, findItemByCode(myProducts, 15));


//myProducts[0].quantity = 0;
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

// show shopee cart list
console.log("\n-----------------------------------");
await cartService.displaycart(myCart);

// show shopee wish list
console.log("\n-----------------------------------");
await wishService.displayWishList(myWishList);

// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
//await cartService.calculateTotal(myCart);

// creating wishlist


// show all products
console.log("\n-----------------------------------");
await showAllProducts(myProducts,"quantity",'asc');

