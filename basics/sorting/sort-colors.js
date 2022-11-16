let A = [2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 0, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 2, 2, 2, 0, 0, 1, 0, 2, 1, 1, 2, 1, 2, 2, 1, 0, 2, 2, 1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 2, 0, 2, 0, 1, 1, 0, 2, 2, 1, 2, 0, 2, 1, 1, 1, 2, 0, 1, 0, 2, 2, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 1, 0, 2, 1, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 2, 1, 2, 2, 2, 1, 2, 2, 0, 1, 0, 1, 2, 1, 1, 0, 1, 2, 0, 1, 0, 2, 2, 1, 2, 1, 0, 2, 2, 1, 1, 0, 2, 1, 2];


sortColors = (A) => {

    /* red --> 0, white --> 1, blue --> 2  */
    let object = new Array(3);

    let length = A.length;
    for (let i = 0; i < length; i++) {
        debugger;
        let index = A[i];
        object[index] = (object[index] !== undefined) ? (object[index] + 1) : 1;
    }
    debugger;

    let k = 0;
    for (let i = 0; i < object.length; i++) {
        debugger;
        for (let j = 0; j < object[i]; j++) {
            debugger;
            A[k] = i;
            k++;
        }
    }

    return A;
}


console.log(sortColors(A));