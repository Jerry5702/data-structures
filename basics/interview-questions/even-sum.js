let A = [16, 3, 3, 6, 7, 8, 17, 13, 7];
let B = [
    [2, 6],
    [4, 7],
    [6, 7]
];


const evenSum = (A, B) => {
    let answer = new Array();
    let pEven = new Array();
    pEven[0] = A[0];

    for (let i = 1; i < A.length; i++) {
        if (i % 2 === 0) {
            pEven[i] = parseInt(pEven[i], 10) + parseInt(pEven[i - 1], 10);
        } else {
            pEven[i] = pEven[i - 1];
        }
    }
    debugger;
    for (let i = 0; i < B.length; i++) {
        let sIndex = B[i][0], eIndex = B[i][1];
        debugger;
        let sum = 0;
        if (sIndex === 0) {
            sum = pEven[eIndex];
        } else {
            sum = parseInt(pEven[eIndex], 10) - parseInt(pEven[sIndex - 1], 10);
        }
        debugger;
        answer.push(sum);
    }
    debugger;
    return answer;
}

console.log(evenSum(A, B));