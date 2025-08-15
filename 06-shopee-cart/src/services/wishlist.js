// adding item 
async function addItem(userWishList, item) {
    // first, checking if the item is in the list.
    let indexFound = -1;
    //console.log("");
    userWishList.forEach(function(itemWishList, index, arr){ // or (item, index, arr) => {
        if (itemWishList.code === item.code) {
            indexFound = index; 
            console.log(`Item já adicinado: ${itemWishList.code} - ${itemWishList.name} - ${itemWishList.category}.`);
            //console.log(`${itemWishList.code} | ${itemWishList.name} | ${itemWishList.category}`);   
        }
    });

    if (indexFound === -1 ) {          
        //Extracting Specific Values for a New Object
        userWishList.push({code: item.code, name: item.name, category: item.category});
        console.log(`Item adicinado: ${item.code} - ${item.name} - ${item.category}.`);        
    }

}

// removing item
async function removeItem(userWishList, item) {
    const indexWishList = userWishList.findIndex((itemWishList) => itemWishList.code === item.code);

    if (indexWishList !== -1) {    
        userWishList.splice(indexWishList, 1); 
        console.log(`Item removido: ${item.code} - ${item.name} - ${item.category}.`);        
    }else{
        console.log(`Item não encontrado: ${item.code} - ${item.name} - ${item.category}.`);
    }      
}

// show items
async function displayWishList(userWishList) {
    console.log("\nShopee wish list:");
    console.table(userWishList);
}

export {
    addItem,
    removeItem,
    displayWishList
}