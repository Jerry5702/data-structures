let A = 236;

const getMultiplication = (number) => {
    let product = 1;
    while (number > 0) {
        let remainder = (number % 10);
        product = (product * remainder);
        number = parseInt((number / 10), 10);
    }
    debugger;
    return product;
}

const checkColorFullNumber = (A) => {
    let number = "" + A;
    let subArray = new Array();
    for (let i = 0; i < number.length; i++) {
        let p = i;
        let subString = "";
        while (p < number.length) {
            subString += number[p];
            subArray.push(subString);
            p++;
        }
    }
    let colorFull = new Set();
    let isColorFull = 1;
    for (let i = 0; i < subArray.length; i++) {
        debugger;
        let product = getMultiplication(Number(subArray[i]));
        if (colorFull.has(product)) {
            isColorFull = 0;
            break;
        }
        colorFull.add(product);
    }
    return isColorFull;
}

console.log(checkColorFullNumber(A));