let A = "bgipsvukg"
let B = [
    [2, 6],
    [4, 7],
    [6, 7]
]

const findVowels = (A, si, ei) => {
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = si; i <= ei; i++) {
        if (vowels.includes(A[i])) {
            count++;
        }
    }
    return count;
}

const getVowels = (A, B) => {
    let vowel = new Array();
    for (let i = 0; i < B.length; i++) {
        let sIndex = B[i][0];
        let eIndex = B[i][1];
        let count = findVowels(A, sIndex, eIndex)
        vowel.push(count);
    }
    return vowel;
}


const checkVowel = (char) => {
    return(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u');
}

const prefixVowelApproach = (word , queries) => {
   let prefixVowel = new Array(word.length);
   
   let char = word[0];
   prefixVowel[0] = ((checkVowel(char)) ? 1 : 0);
   for(let i = 1; i < word.length; i++){
       char = word[i];
       prefixVowel[i]= (checkVowel(char)) ? (prefixVowel[i-1] + 1) : (prefixVowel[i-1]);
   }
   
   let vowelCount = new Array();
   for(let q = 0; q < queries.length; q++){
       let sIndex = queries[q][0];
       let eIndex = queries[q][1];
       let count = 0;
       if(sIndex === 0){
           count = prefixVowel[eIndex];
       } else {
           count = (prefixVowel[eIndex] - prefixVowel[sIndex - 1]);
       }
       vowelCount.push(count);
   }
   
   return vowelCount;
}
console.log(prefixVowelApproach(A, B));