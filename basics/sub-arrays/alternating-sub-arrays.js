let array = [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1];
array = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1]
let B = 1;


const checkForAlternatingArray = (array) => {
    let isAlternating = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== null && array[i] !== undefined) {
            if (array[i] === array[i - 1]) {
                isAlternating = false;
                break;
            }
        } else {
            isAlternating = false;
            break;
        }
    }
    return isAlternating;
}

const findSubArray = (A, subArrayLength) => {
    let alternatingArray = [];
    for (let i = 0; i < A.length; i++) {
        let subArray = [];
        let startIndex = i;
        let endIndex = 0;
        for (j = i; j < A.length; j++) {
            if ((j - i + 1) <= subArrayLength) {
                subArray.push(A[j]);
            } else {
                break;
            }
            endIndex = j;
        }
        if (subArray.length = subArrayLength) {
            let isAlternating = checkForAlternatingArray(subArray);
            debugger;
            if (isAlternating) {
                let centerIndex = ((endIndex + startIndex) / 2);
                debugger;
                alternatingArray.push(centerIndex);
            }
        }
    }
    return alternatingArray;
}

const alternatingArray = (A, B) => {
    let centerArray = [];
    const subArrayLength = (2 * B + 1);
    //In this case, all elements of an array can act as center of alternating sub-array of length 1
    if (subArrayLength === 1) {
        for (let i = 0; i < A.length; i++) {
            centerArray.push(i);
        }
    } else {
        centerArray = findSubArray(A, subArrayLength);
    }
    debugger;
    return centerArray;
}


let count = alternatingArray(array, B);

