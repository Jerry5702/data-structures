let array = [5, 2, 1, 4];
array = [36, 63, 63, 26, 87, 28, 77, 93, 7];

const create2DArray = (A) => {
    let array2D = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            debugger;
            let subArray = [];
            for (k = i; k <= j; k++) {
                subArray.push(A[k]);
            }
            debugger;
            array2D.push(subArray);
        }
    }
    console.log(array2D);
    return array2D;
}


let sum = create2DArray(array);

