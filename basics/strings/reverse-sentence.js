let A = "crulgzfkif gg ombt vemmoxrgf qoddptokkz op xdq hv ";

const reverseString_old = (A) => {
    let wordArray = new Array();
    let word = "";
    for (let i = 0; i < A.length; i++) {
        let ascii = A[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            word += A[i];
        } else {
            if ((i > 0) && (i < A.length) && (word !== "")) {
                wordArray.push(word);
                word = "";
            }
        }
    }
    debugger;

    let answer = "";
    for (let j = (wordArray.length - 1); j >= 0; j--) {
        answer = (j === (wordArray.length - 1)) ? wordArray[j] : (answer + " " + wordArray[j]);
    }
    debugger;

    return answer;
}


const reverseString= (A) => {
    let wordArray = new Array();
     let word = "";
     let k = 0;
     for (let i = 0; i < A.length; i++) {
         let ascii = A[i].charCodeAt();
         if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
             word += A[i];
         } else {
             if ((i > 0) && (i < A.length) && (word !== "")) {
                 wordArray.push(word);
                 word = "";
             }
         }
     }
 
     let answer = "";
     for (let j = (wordArray.length - 1); j >= 0; j--) {
         answer = (j === (wordArray.length - 1)) ? wordArray[j] : (answer + " " + wordArray[j]);
     }
     return answer;
 }

console.log(reverseString(A));