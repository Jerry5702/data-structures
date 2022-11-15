let A = [7, 6, 6, 3, 1, 5, 7];
let B = [2, 1, 7, 5, 8];


const getElementFrequency = (A, B) => {
    let output = new Array();
    let freqHashmap = new Map();
    debugger;
    for (let i = 0; i < A.length; i++) {
        debugger;
        if (freqHashmap.has(A[i])) {
            let value = freqHashmap.get(A[i]) + 1;
            freqHashmap.set(A[i], value++);
        } else {
            freqHashmap.set(A[i], 1);
        }
    }
    debugger;
    for (let j = 0; j < B.length; j++) {
        if (freqHashmap.has(B[j])) {
            output.push(freqHashmap.get(B[j]));
        } else {
            output.push(0);
        }
    }

    return output;
}



console.log(getElementFrequency(A, B));