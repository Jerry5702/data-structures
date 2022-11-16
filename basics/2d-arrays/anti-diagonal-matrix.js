let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]



const getDiagonalElements = (A, rows, columns) => {
    let diagonalArray = [];
    //Step 1: 
    for (let j = 0; j < columns; j++) {
        let rightIndex = 0;
        let currentIndex = j;
        let tempArray = [];
        while (rightIndex < rows && currentIndex >= 0) {
            tempArray.push(A[rightIndex][currentIndex]);
            rightIndex++;
            currentIndex--;
        }
        debugger;
        for (let i = 0; i < columns; i++) {
            if (tempArray[i] === undefined || tempArray[i] === null) {
                tempArray.push(0);
            }
        }
        debugger;
        diagonalArray.push(tempArray);
    }
    //Step 2:
    for (let i = 1; i < rows; i++) {
        let rightIndex = i;
        let currentIndex = columns - 1;
        let tempArray = [];
        while (rightIndex < rows && currentIndex >= 0) {
            tempArray.push(A[rightIndex][currentIndex]);
            rightIndex++;
            currentIndex--;
        }
        debugger;
        for (let i = 0; i < columns; i++) {
            if (tempArray[i] === undefined || tempArray[i] === null) {
                tempArray.push(0);
            }
        }
        debugger;
        diagonalArray.push(tempArray);
    }

    return diagonalArray;
}


const getAntiDiagonalArray = (A) => {
    let diagonalArray = [];
    let rows = A.length;
    let columns = A[0].length;
    //diagonalArray = createDiagonalArray(rows, columns);
    diagonalArray = getDiagonalElements(A, rows, columns);
    debugger;
    return diagonalArray;
}

getAntiDiagonalArray(array);