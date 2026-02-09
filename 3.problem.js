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

