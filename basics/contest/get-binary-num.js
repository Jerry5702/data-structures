


getDecimal = (A, B) => {
    let binaryNum = '';
    for (let i = 0; i < A; i++) {
        binaryNum += '1';
    }
    for (let i = 0; i < B; i++) {
        binaryNum += '0';
    }
    debugger;
    return toConvertNumber(binaryNum);
}


const toConvertNumber = (number) => {

    let answer = 0, factor = 1;
    for (let i = (number.length - 1); i >= 0; i--) {
        debugger;
        answer += Number(number[i]) * factor;
        factor = (factor * 2);
    }
    debugger;
    return answer;
}


console.log(getDecimal(3, 2));
