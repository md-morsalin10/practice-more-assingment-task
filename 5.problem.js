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

