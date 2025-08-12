import * as cartService from "./services/cart.js";
import { getProducts } from "./services/products.js"


console.log("Welcome to the your Shopee Cart!");

const myCart = [];
const myWishList = []; 
const myProducts = await getProducts();

// display all products
myProducts.forEach(function(item, index){
    console.log(`${JSON.stringify(item,null,2)}`);
});

//criando dois itens
//const item1 = await createItem(0,"hotwheels ferrari","miniature", 20.99, 5);
//const item2 = await createItem(1,"hotwheels lamborghini",["toys"], 39.99, 6);

// adicionei dois itens ao carrinho
//await cartService.addItem(myCart, item1);
//await cartService.addItem(myCart, item2);

//await cartService.addItem(myCart, myProducts[0]);
//await cartService.addItem(myCart, myProducts[1]);

//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

//await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
//await cartService.calculateTotal(myCart);
