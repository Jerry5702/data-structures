
const ToInteger = (x) => {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

const modulo = (a, b) => {
    return (a - Math.floor(a / b) * b);
}

const ToUint32 = (x) => {
    return modulo(ToInteger(x), Math.pow(2, 32));
}


const reverseBinary = (A, startIndex, endIndex) => {
    debugger;
    let number = ToUint32(A);
    while (startIndex < endIndex) {
        debugger;
        if ((number | (1 << startIndex)) !== (number | (1 << endIndex))) {
            debugger;
            number = (number ^ (1 << startIndex));
            debugger;
            number = (number ^ (1 << endIndex));
            debugger;
        }
        startIndex++;
        endIndex--;
    }
    return number;
}

const reverseNumber = (number, startIndex, endIndex) => {
    let answer = 0;
    while (startIndex <= endIndex) {
        debugger;
        if ((number & 1) == 1) {
            answer += Math.pow(2, (endIndex - startIndex));
            debugger;
        }
        debugger;
        number = (number >> 1);
        startIndex++;
    }
    return answer;
}

console.log(reverseNumber(4294967295, 0, 31));