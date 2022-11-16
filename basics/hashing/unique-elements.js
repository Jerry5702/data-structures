let A = [13, 15, 13, 2, 9, 3, 10, 10, 20, 13];

const usingHashSet = (A) => {
    let distinctEle = new Map();
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        debugger;
        if (distinctEle.has(A[i])) {
            count = (count > 0) ? (count - 1) : count;
        } else {
            distinctEle.Set(A[i]);
            count++;
        }
    }
    return count;
}


const usingHashMap = (A) => {
    let distinctEle = new Map();
    for (let i = 0; i < A.length; i++) {
        if (distinctEle.has(A[i])) {
            let value = distinctEle.get(A[i]) + 1;
            distinctEle.set(A[i], value++);
        } else {
            distinctEle.set(A[i], 1);
        }
    }
    debugger;
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (distinctEle.get(A[i]) === 1) {
            count++;
        }
    }
    debugger;
    return count;
}


const getUniqueElementsCount = (A) => {
    return usingHashMap(A);
}

console.log(getUniqueElementsCount(A));

