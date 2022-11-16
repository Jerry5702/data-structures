let A = [2, 1, 1];


const majorityProblem = (A) => {

    let ele = A[0], freq = 1;
    for (let i = 0; i < A.length; i++) {
        if (freq === 0) {
            ele = A[i]; freq = 1;
        } else if (ele === A[i]) {
            freq++;
        } else {
            freq--;
        }
    }
    debugger;
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === ele) {
            count++;
        }
    }
    debugger;
    if (count > Math.floor(A.length / 2)) {
        debugger;
        return ele;
    } else {
        return 0;
    }
}


console.log(majorityProblem(A));