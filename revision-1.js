


/*function signature/sample */
function newPrice(currentPrice , discount ) {
       if(typeof currentPrice !== "number" || typeof discount!== "number" || discount>100){
        return "Invalid"
       }

       const discountPrice = currentPrice*discount/100;
       const price = currentPrice-discountPrice;
       return price.toFixed(3)
}

const input = newPrice(1500, 20)
console.log(input)

function newPrice(currentPrice, discount){
    if(typeof currentPrice!=="number" || typeof discount!=="number" || discount>=100){
        return "Invalid"
    }

    const discountPrice = currentPrice * discount/100;
    const price = currentPrice - discountPrice ;
    return price.toFixed(3)
}

console.log(newPrice(3000,20))

