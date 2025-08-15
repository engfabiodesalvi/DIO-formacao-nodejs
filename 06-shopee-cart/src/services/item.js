//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem2(code, name, category, price, quantity) {
  // adding index
  // adding category
  
  let subtotal = price * quantity;

  return {
    code,
    name,
    price,
    quantity,
    category,
    subtotal,
  };
}

async function createItem(code, name, category, price, quantity) {
  // adding index
  // adding category

  return {
    code,
    name,
    price,
    quantity,
    category,
    subtotal: () => price * quantity,
  };
}

export default createItem;
