let A = "AbcaZeoB";


const operations = (A) => {

    debugger;

    let vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    A = A + A;
    let answer = "";
    debugger;
    for (let i = 0; i < A.length; i++) {
        debugger;
        let ascii = A[i].charCodeAt();
        if ((ascii >= 97 && ascii <= 122) && vowel.includes(A[i])) {
            answer += "#";
        } else if ((ascii >= 65 && ascii <= 90)) {
            //do nothing
        } else {
            answer += A[i];
        }
    }
    return answer;
}


console.log(operations(A));