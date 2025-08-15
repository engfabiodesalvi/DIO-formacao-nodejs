// finding item by code
export function findItemByCode(productList, code){
    const index = productList.findIndex((item) => {
        if (item.code === code)
            return true
        else
            return false;
    })

    if (index >= 0) {
        return productList[index];
    } else {
        return null;
    }
    
};

