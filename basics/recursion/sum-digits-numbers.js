
//1. Assumption: find and retutn the sum of digits of a number;
const sumDigits = (num) => {
    //3. Base conditin - if number = 0, return 0
    if (num === 0) {
        return 0;
    }
    //2. Sub-problems: get sum iteratively
    return sumDigits(parseInt(num / 10)) + (num % 10);
}


console.log(sumDigits(56));