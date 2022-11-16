let A = [8, 89];
A = [472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412];

const getRemainder = (num) => {
    let remainder = 0;
    while (num > 0) {
        remainder = (num % 10);
        num = (num / 10);
    }
    return remainder;
}

const customComparator = (a, b) => {
    const ra = getRemainder(a);
    const rb = getRemainder(b);
    if (ra > rb) {
        return -1;
    } else if ((ra == rb) && (a > b)) {
        return -1;
    } else {
        return 1;
    }
}

const largestNumber = (A) => {
    let array = A.sort((a, b) => {
        return customComparator(a, b);
    });
    debugger;
    let maxNumber = "";
    for (let i = 0; i < array.length; i++) {
        maxNumber += array[i];
    }
    return maxNumber;
}

console.log(largestNumber(A));