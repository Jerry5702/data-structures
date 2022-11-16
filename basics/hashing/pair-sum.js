let A = [23, 52, 95, 29, 9, 47, 49, 55, 96, 4];
let B = 100;

const usingHashMap = (array, sum) => {

    let isPairExists = 0;
    let pair = new Map();
    for (let i = 0; i < array.length; i++) {
        if (pair.has(array[i])) {
            let value = pair.get(Number(A[i])) + 1;
            pair.set(array[i], value);
        } else {
            pair.set(array[i], 1);
        }
    }
    debugger;
    for (let i = 0; i < array.length; i++) {
        let a = array[i], b = (sum - Number(array[i]));
        if (a !== b && pair.has(b)) {
            return 1;
        } else if (a === b && pair.get(a) > 1) {
            return 1;
        }
    }

    return 0;

}

console.log(usingHashMap(A, B));
