
//1. Assumption: print first N natural numbers in increasing order from 1 -> N.
const printNumbers = (num) => {
    debugger;
    //3. Base Condition: stops after num = 1; 
    if (num === 1) {
        return "" + num;
    }
    //2. Sub-problem: print numbers iteratively
    let series = printNumbers((num - 1));
    debugger
    series = (series !== undefined) ? series + " " + num : " " + num;
    return series;
}

//let series = printNumbers(9);
//console.log(series);



//1. Assumption: print first N natural numbers in decreasing order from N -> 1.
const printNumbersDecreasingOrder = (num, si) => {
    debugger;
    //3. Base Condition: stops after num = n; 
    if (si === num) {
        return si;
    }
    //2. Sub-problem: print numbers iteratively
    let series = printNumbersDecreasingOrder(num, (si + 1));
    series += " " + si;
    return series;

}

let reverseSeries = printNumbersDecreasingOrder(9, 1) + " ";
console.log(reverseSeries);
