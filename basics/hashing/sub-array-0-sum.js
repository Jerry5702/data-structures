let A = [1, 2, 3, 4, 5]


const getZeroSubArray = (array) => {
    //create a prefix-sum array;
    let pfSum = new Array();
    pfSum[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        pfSum[i] = pfSum[i - 1] + array[i];
    }
    debugger;
    let hashset = new Set();
    for (let i = 0; i < array.length; i++) {
        if (pfSum[i] === 0) {
            return 1;
        }
        hashset.add(pfSum[i]);
    }
    debugger;
    if (hashset.size < array.length) {
        return 1;
    }
    debugger;
    return 0;
}

console.log(getZeroSubArray(A));