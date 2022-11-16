
var num = readline().split(" ").map(x => parseInt(x)); // num will be an array [1,2,3]
var n = num[0]; // to store values in different variables. 
var m = num[1];
var q = num[2];

window.onkeydown(() => {

});


const createArray = (n, m) => {
    debugger;
    let matrix = new Array();
    let count = 0;
    for (let row = 0; row < n; row++) {
        let temp = [];
        for (let col = 0; col < m; col++) {
            temp[col] = count;
            count++;
        }
        matrix.push(temp);
    }
    return matrix;
}


console.log(createArray(n, m));