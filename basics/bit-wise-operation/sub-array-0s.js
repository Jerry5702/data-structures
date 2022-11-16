let A = 5;
let B = [0, 1, 1, 0, 1];

const usingIndexes = (A, B) => {
    let zerosSubArrays = 0;
    let totalSubArrays = (A * (A + 1) / 2);
    let sIndex = 0, eIndex = 0;
    let difference = 0;
    for (let i = 0; i < A; i++) {
        debugger;
        if (B[i] === 0) {
            eIndex++;
        } else {
            difference = (eIndex - sIndex);
            zerosSubArrays += (difference * (difference + 1) / 2);
            sIndex = i;
            eIndex = i;
        }
    }
    debugger;
    if ((eIndex - sIndex) > 0) {
        difference = (eIndex - sIndex);
        zerosSubArrays += (difference * (difference + 1) / 2);
    }
    debugger;
    return (totalSubArrays - zerosSubArrays);
}


console.log(usingIndexes(A, B));