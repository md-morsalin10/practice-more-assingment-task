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
