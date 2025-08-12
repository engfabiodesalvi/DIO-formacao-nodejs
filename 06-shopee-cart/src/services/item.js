//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(index, name, price, quantity,category) {
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
