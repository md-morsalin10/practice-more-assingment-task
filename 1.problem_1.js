// Problem 1
function newPrice(currentPrice , discount ) {
        
        if(typeof currentPrice!=="number" || typeof discount!=="number" || discount>100){
            return "Invalid"
        }
        else{
        const discountPrice = currentPrice*discount/100;
        const mainPrice = currentPrice-discountPrice;
        // console.log(mainPrice)
        return mainPrice.toFixed(3);
        }
}
