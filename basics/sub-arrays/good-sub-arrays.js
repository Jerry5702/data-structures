let array = [ 3, 12, 11, 11, 11, 15 ];
let B = 12;

const goodSubArrays = (length, subArraySum, B) => {
    let answer = 0;
    if (length % 2 === 0 && subArraySum < B) {
        answer = 1;
    } else if (length % 2 !== 0 && subArraySum > B) {
        answer = 1;
    }
    return answer;
}

const checkForGoodSubArrays = (A, B) => {
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            debugger;
            let subArray = [];
            let subArraySum = 0;
            for (let k = i; k <= j; k++) {
                subArraySum += parseInt(A[k], 10);
            }
            debugger;
            answer += goodSubArrays(subArray, subArraySum, B);
        }
    }
    console.log(answer);
    return answer;
}

const prefixSumApproach = (A, B) => {
    let answer = 0;
    //calculate the Prefix sum array
    for (let i = 1; i < A.length; i++) {
        A[i] = A[i] + A[i - 1];
    }
    debugger;
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let subArraySum = 0;
            let subArraylength = (j - i + 1);
            debugger;
            if (i === 0) {
                subArraySum = A[j];
            } else {
                subArraySum = (A[j] - A[i - 1]);
            }
            answer += goodSubArrays(subArraylength, subArraySum, B);
            debugger;

        }
    }
    debugger;
    return answer;
}

let count = prefixSumApproach(array, B);

