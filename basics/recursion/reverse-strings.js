
//1. Assumption: find and retutn the sum of digits of a number;
const reverseString = (charArray, si, ei) => {
    //3. Base conditin - if number = 0, return 0
    if (si > ei) {
        return charArray;
    }
    //2. Sub-problems: get sum iteratively
    charArray = reverseString(charArray, (si + 1), (ei - 1));
    debugger;
    /*perform characters reversal*/
    let temp = charArray[si];
    charArray[si] = charArray[ei];
    charArray[ei] = temp;
    return charArray;
}

let str = "scaleracademy";
let charArray = [...str];
charArray = reverseString(charArray, 0, (charArray.length - 1));
str = charArray.join('');
console.log(str);