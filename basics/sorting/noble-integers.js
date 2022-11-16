let A = [-1, -2, 0, 0, 0, -3];


const getNobleIntegers = (array) => {
    array.sort((a, b) => { return (a - b); });
    let count = 0;
    let greater = 0;
    debugger;
    let length = array.length;
    if (array[(length - 1)] === 0) { count++; }
    for (let i = (length - 2); i >= 0; i--) {
        debugger;
        if (parseInt(array[i], 10) !== parseInt(array[(i + 1)], 10)) {
            greater = ((length - 1) - i);
        }
        if (parseInt(array[i], 10) === greater) {
            count++;
        }
    }
    if (count > 0) {
        return 1;
    }
    return -1;
}

console.log(getNobleIntegers(A));