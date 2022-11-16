let A = ["S", "c", "A", "L", "E", "r", "A", "c", "a", "D", "e", "m", "y"];


const toLowerCase = (A) => {
    for (let i = 0; i < A.length; i++) {
        let asciiValue = A[i].charCodeAt();
        if (asciiValue >= 65 && asciiValue <= 90) {
            asciiValue += 32;
        }
        A[i] = String.fromCharCode(asciiValue);
    }
    return A;
}


const toUpperCase = (A) => {
    for (let i = 0; i < A.length; i++) {
        let ascii = A[i].charCodeAt();
        if (ascii >= 97 && ascii <= 122) {
            ascii -= 32;
        }
        A[i] = String.fromCharCode(ascii);
    }
    return A;
}

const toToggleString = (A) => {
    for (let i = 0; i < A.length; i++) {
        debugger;
        let ascii = A[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90) {
            ascii += 32;
        } else if (ascii >= 97 && ascii <= 122){
            ascii -= 32;
        }
        A[i] = String.fromCharCode(ascii);
    }
    return A;
}

console.log(toLowerCase(A));
console.log(toToggleString('tHiSiSaStRiNg'))