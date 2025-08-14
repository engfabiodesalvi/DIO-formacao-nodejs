//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(index, name, category, price, quantity) {
  // adding index
  // adding category
  
  let subtotal = price * quantity;

  return {
    index,
    name,
    price,
    quantity,
    category,
    subtotal,
  };
}

async function createItem2(index, name, category, price, quantity) {
  // adding index
  // adding category

  return {
    index,
    name,
    price,
    quantity,
    category,
    subtotal: () => price * quantity,
  };
}

export default createItem;
