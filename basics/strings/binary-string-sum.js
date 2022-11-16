let A = "1010110111001101101000";
let B = "1000011011000000111100110";

A = "1110000000010110111010100100111";
B = "101001";

//A = "11";
//B = "1";

const toConvertNumber = (number, fromBase, toBase) => {
    let answer = 0, factor = 1;
    while (number > 0) {
        let remainder = (number % toBase)
        answer += (remainder * factor);
        factor = factor * fromBase;
        number = Math.floor(number / toBase);
    }
    return answer;
}

const getSum = (A, B) => {
    A = Number(A);
    B = Number(B);
    let num1 = toConvertNumber(A, 2, 10);
    let num2 = toConvertNumber(B, 2, 10);
    let sum = "" + toConvertNumber((num1 + num2), 10, 2);
    debugger;
    return sum;

}

const makeStringEqualSize = (array, length) => {

    let finalLength = array.length;
    for (let i = 0; i < (length - finalLength); i++) {
        array = "0" + array;
    }
    return array;

}


const getBinaryStringSum = (A, B) => {
    let carry = 0;
    let sum = "";
    let length = (A.length >= B.length) ? A.length : B.length;
    if (A.length > B.length) {
        B = makeStringEqualSize(B, length);
    } else if (A.length < B.length) {
        A = makeStringEqualSize(A, length);
    }
    for (let i = (length - 1); i >= 0; i--) {
        debugger;
        if (A[i] === "0" && B[i] === "0") {
            sum = ((carry === 1) ? "1" : "0") + sum;
            carry = 0;
        } else if ((A[i] === "0" && B[i] === "1") || (A[i] === "1" && B[i] === "0")) {
            if (i === 0) {
                sum = ((carry === 1) ? "10" : "1") + sum;
                carry = 0;
            } else {
                sum = ((carry === 1) ? "0" : "1") + sum;
                carry = (carry === 1) ? 1 : 0;
            }
        } else if (A[i] === "1" && B[i] === "1") {
            if (i === 0) {
                sum = ((carry === 1) ? "11" : "10") + sum;
                carry = 0;
            } else {
                sum = ((carry === 1) ? "1" : "0") + sum;
                carry = 1;
            }
        }
    }

    return sum;
}

console.log(getBinaryStringSum(A, B));
