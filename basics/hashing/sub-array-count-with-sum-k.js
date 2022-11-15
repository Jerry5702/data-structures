let A = [-2, 16, -12, 5, 7, -1, 2, 12, 11];
let B = 17;

const countSubArraySumUsingPointers = (pfSum, sum) => {
    let count = 0;
    for (let i = 0; i < pfSum.length; i++) {
        for (let j = i; j < pfSum.length; j++) {
            const localSum = (i === 0) ? (Number(pfSum[j])) : (Number(pfSum[j]) - Number(pfSum[i - 1]));
            if (localSum === sum) {
                count++
            } 
        }
    }
    debugger;
    return count;
}

const getSubArraySumUsingHashing = (array, pfSum, sum) => {

}

const solve = (A, B) => {
    let pfSum = new Array();
    pfSum[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        pfSum[i] = Number(pfSum[i - 1]) + Number(A[i]);
    }
    debugger;
    return countSubArraySumUsingPointers(pfSum, B);
}


console.log(solve(A, B));