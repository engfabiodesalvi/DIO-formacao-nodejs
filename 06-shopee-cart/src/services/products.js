import createItem from "./item.js";

async function getProducts() {
    // Adding list of products
    let myProducts = [];

    //criando dois itens
    let item1 = await createItem(0,"hotwheels ferrari",["toys", "miniature"], 20.99, 5);
    let item2 = await createItem(1,"hotwheels lamborghini",["toys", "miniature"], 39.99, 6);
    
    myProducts.push({...item1});
    
    myProducts.push({...item2});
    myProducts.push(await createItem(myProducts.length,"book1",["book"], 45.4, 1));
    myProducts.push(await createItem(myProducts.length,"book2",["book"], 10.2, 2));
    myProducts.push(await createItem(myProducts.length,"book3",["book"], 5.0, 0));

    myProducts.push(await createItem(myProducts.length,"fruit",["food"], 1.5, 5));
    myProducts.push(await createItem(myProducts.length,"vegetable",["food"], 8.0, 10));
    myProducts.push(await createItem(myProducts.length,"meats",["food"], 5.0, 10));

    myProducts.push(await createItem(myProducts.length,"furniture",["home goods"], 100.0, 2));
    myProducts.push(await createItem(myProducts.length,"decor",["home goods"], 50.0, 3));
    myProducts.push(await createItem(myProducts.length,"bedding",["home goods"], 200.0, 2));

    myProducts.push(await createItem(myProducts.length,"parts",["automotive"], 50.0, 8));
    myProducts.push(await createItem(myProducts.length,"accessories",["automotive"], 15.0, 8));
    myProducts.push(await createItem(myProducts.length,"tools",["automotive"], 47.9, 4));

    myProducts.push(await createItem(myProducts.length,"food",["pet supplies"], 74.0, 78));
    myProducts.push(await createItem(myProducts.length,"toys",["pet supplies"], 5.0, 150));
    myProducts.push(await createItem(myProducts.length,"grooming",["pet supplies"], 1.0, 20));
    myProducts.push(await createItem(myProducts.length,"bedding",["pet supplies"], 15.0, 50));
    
    return myProducts;
}

// sortting an array of string
function sortArrayString(array, order = 'asc') {
    const newArray = [...array];

    newArray.sort((a, b) => {
        const valA = a;
        const valB = b; 
        const options = {sensitivity: "accent", numeric: true};   
        
        if (order === 'asc')
            return valA.localeCompare(valB, options);
        else
            return valB.localeCompare(valA, options);
    });      

    return newArray;
}

// sortting an object with an array of objects
async function sortArrayOfObjects(myProducts, sortedBy, order = 'asc') {
    const newMyProducts = [...myProducts];

    newMyProducts.forEach((item, index, arr) => {
        if (sortedBy === 'category' && typeof item[sortedBy] === 'object') {
            item[sortedBy] = sortArrayString(item[sortedBy], order);
        }
    });

    newMyProducts.sort((a, b) => { 
        let valA = a[sortedBy];
        let valB = b[sortedBy];
        const options = {sensitivity: "accent", numeric: true};

        if (typeof valA === 'string' && typeof valB === 'string') {
            // For string properties, sue localeCompare for proper alphabetical sorting
            if (order === 'asc') {
                //console.log("ok");
                return valA.localeCompare(valB, options);
            } else
                return valB.localeCompare(valA, options);
        } else if (typeof valA === 'object' && typeof valB === 'object') { // array of strings
            // For string properties, sue localeCompare for proper alphabetical sorting
            //valA = sortArrayString(valA, order);
            //valB = sortArrayString(valB, order);
            
            console.log(`${valA[0]} - ${valB[0]}`);
            
            if (order === 'asc')
                return valA[0].localeCompare(valB[0], options);
            else
                return valB[0].localeCompare(valA[0], options);   

        } else {
            // For numeric or ther comparable types
            if (order === "asc") 
                return valA - valB;
            else
                return valB - valA;
        }
    });
    //console.log(`${JSON.stringify(newMyProducts,null,2)}`);
    return newMyProducts;
}

async function showAllProducts(myProducts, sortedBy, order = 'asc') {
    //const myProducts = await getProducts();    

    // display all products
    console.log("\nProducts available in the system!\n");
    //console.table(myProducts);
    
    // sort myProducts by sortedBy and order
    myProducts = await sortArrayOfObjects(myProducts, sortedBy, order);    

    // console.log("INDEX | CODE | NAME | CATEGORY | PRICE | QUANTITY");
    // myProducts.forEach(function(item, index){
    //     //console.log(`${JSON.stringify(item,null,2)}`);
    //     console.log(`${index} | ${item.index} | ${item.name} | ${item.category} | R$ ${item.price} | ${item.quantity}x`);
    // });  

    console.table(myProducts);
}

export {
    getProducts,
    showAllProducts
}



/*
Examples of Item Categories:
Electronics: TVs, computers, phones, audio equipment, cameras.
Clothing: Men's, women's, children's; shirts, pants, dresses, shoes, accessories.
Food: Fruits, vegetables, meats, dairy, snacks, beverages.
Books: Fiction, non-fiction, educational, children's, magazines.
Home Goods: Furniture, decor, kitchenware, bedding, cleaning supplies.
Toys: Dolls, action figures, games, puzzles, outdoor toys.
Beauty Products: Skincare, makeup, haircare, fragrances, bath & body.
Sports & Outdoors: Camping gear, fitness equipment, sporting goods.
Automotive: Parts, accessories, tools, maintenance supplies.
Office Supplies: Paper, pens, notebooks, printers, ink.
Pet Supplies: Food, toys, grooming, bedding.
Health & Wellness: Vitamins, supplements, first aid, personal care. 
*/