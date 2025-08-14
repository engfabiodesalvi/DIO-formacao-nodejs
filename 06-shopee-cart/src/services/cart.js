//Modified by Fabio Toledo Bonemer De Salvi
//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// adding one item per time!
async function addOneItem(userCart, item) { 
  // first, checking if the item is in the list.
  let indexFound = -1;
  //console.log("");
  userCart.forEach(function(itemCart, index, arr){ // or (item, index, arr) => {
    if (itemCart.index === item.index) {
      indexFound = index;   
      //console.log(`${itemCart.index} | ${itemCart.name} | ${itemCart.quantity}`);   
    }
  });

  if (item.quantity > 0) {
    item.quantity -= 1;
    if (indexFound >= 0 ) {          
      userCart[indexFound].quantity += 1;
      //console.log(`${userCart[indexFound].index} | ${userCart[indexFound].name} | ${userCart[indexFound].quantity}`); 
    } else {
      userCart.push({...item});
      userCart[userCart.length-1].quantity = 1;
    }
  }
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// -> removing one item
async function removeOneItem(userCart, item) {
  const indexCart = userCart.findIndex((itemCart) => itemCart.index === item.index);

  if (indexCart >= 0) {    
    if(userCart[indexCart].quantity > 0) {
      item.quantity += 1;
      userCart[indexCart].quantity -= 1;
    }else{
      userCart.splice(indexCart, 1);      
    }    
  }else{
    console.log("Item não encontrado!");
  }  

}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal}`
    );
  });
}

export { 
  addItem, addOneItem, calculateTotal,
  deleteItem, removeItem, removeOneItem, displaycart 
};
