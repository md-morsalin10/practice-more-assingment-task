// Problem 1
function newPrice(currentPrice , discount ) {
        
        if(typeof currentPrice!=="number" || typeof discount!=="number" || discount>100){
            return "Invalid"
        }
        else{
        const discountPrice = currentPrice*discount/100;
        const mainPrice = currentPrice-discountPrice;
        return mainPrice.toFixed(3);
        }
}


/*Problem 2 */
function validOtp(otp){

    if(typeof otp !== "string"){
        return "Invalid"
    }
    else if (otp.length === 8 && otp.startsWith( "ph-")===true){
        return true;
    }
    else{
        return false;
    }    
}

/*Problem 3 */
function finalScore (omr) {
    
    if(omr.right+omr.wrong+omr.skip !== 100){
        return "Invalid"
    }
    else{
    const rightNum = omr.right*1;
    const wrongNum = omr.wrong*0.5;
    const Mark = rightNum - wrongNum;
    const totalMark = Math.round(Mark)
    return totalMark;
    }
     
}

/*Problem 4 */
function gonoVote(array) {
    if(Array.isArray(array)===false){
        return "Invalid"
    }

    let haCount =0;
    let naCount =0;
    for( const arr of array){
     if(arr === "ha"){
        haCount++
     } 
     else{
        naCount++
     }
    }

    if(haCount>naCount){
        return true
    }
    if(haCount===naCount){
        return "equal"
    }
    else{
        return false;
    }
}

// problem 5
function  analyzeText(str) {
   
    if(typeof str !== "string" || str.length === 0){
        return "Invalid"
    }

    const words = str.split(" ").join("")
    const token =words.length;

    const texts = str.split(" ")
    let longestWord ="";
    for(const text of texts){
   
      if(text.length > longestWord.length){
        longestWord = text;
      }
    }
    return{
        longwords: longestWord,
        token: token
    }
}

