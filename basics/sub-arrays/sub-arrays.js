let array = [9, 5, 7, 8, 10, 1, 8, 3, 2];
let A = 9;
let B = 76;

array = [7, 1, 8, 5, 8, 5, 3, 3, 5]; A = 9; B = 78;
array = [1, 2, 4, 4, 5, 5, 5, 7, 5]; A = 9; B = 14;
array = [7, 10, 3, 1]; A = 4; B = 11;

const bruteForceApproach = (A, B, C) => {
    let maxSum = 0;
    for (let i = 0; i < A; i++) {
        for (let j = i; j < A; j++) {
            debugger;
            let sum = 0;
            for (let k = i; k <= j; k++) {
                let value = parseInt(C[k], 10);
                if ((sum + value) <= B) {
                    sum += value;
                } else {
                    break;
                }
            }
            debugger;
            if (sum >= maxSum && sum <= B) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

const prefixSumApproach = (A, B, C) => {
    for (let i = 1; i < A; i++) {
        C[i] = C[i] + C[i - 1];
    }
    let maxSum = 0;
    for (i = 0; i < A; i++) {
        let sum = 0;
        debugger;
        for (j = i; j < A; j++) {
            if (i === 0) {
                sum = C[j];
            } else if ((parseInt(C[j], 10) - parseInt(C[i - 1], 10)) <= B) {
                sum = (parseInt(C[j], 10) - parseInt(C[i - 1], 10));
            } else {
                break;
            }
        }
        debugger;
        if (sum >= maxSum && sum <= B) {
            maxSum = sum;
        }
    }
    return maxSum;
}


const carryForwardApproach = (A, B, C) => {
    let maxSum = 0;
    for (i = 0; i < A; i++) {
        let sum = 0;
        debugger;
        for (j = i; j < A; j++) {
            let value = parseInt(C[j], 10);
            if ((sum + value) <= B) {
                sum += value;
            } else {
                break;
            }
        }
        debugger;
        if (sum >= maxSum && sum <= B) {
            maxSum = sum;
        }
    }
    return maxSum;
}


let sum = carryForwardApproach(A, B, array);

