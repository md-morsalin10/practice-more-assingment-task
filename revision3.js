/*function signature/sample */
function finalScore (omr) {
          //write your code here
    if(omr.right+omr.wrong+omr.skip!==100){
        return "Invalid"
    }
    else{
        const rightNum = omr.right*1;
        const wrongNum = omr.wrong*0.5;
        const Mark = rightNum - wrongNum;
        const totalMark =Math.round(Mark)
        return totalMark
    }      
}

const input = { right: 80, wrong: 10, skip: 10 }
const result = finalScore(input)
console.log(result);
