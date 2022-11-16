/*
let array = [
    [47, -59, 20, 33, 20, -47, -87, -59, 85]
    [8, -67, 48, -10, -23, -68, -28, 62, -94]
    [-50, 77, -39, -57, 15, 71, 44, 13, 53]
    [-30, 43, -92, -94, 42, 37, 95, 7, 19]
    [-1, 92, -85, 20, -53, -16, 31, -95, 4]
    [-62, 49, 0, 53, -93, -61, -49, 86, 97]
    [62, -26, -1, -38, 59, -93, -93, 12, -90]
    [78, 85, 90, 89, -65, 5, 48, 40, -86]
    [-79, -68, -89, 90, -40, 47, 68, -25, 92]
]
*/
let array = [
    [1, -2, -3]
    [-4, 5, -6]
    [-7, -8, 9]
]

const calculateMinimumDiagonalSum = (A) => {
    debugger;
    let diagonalSum = 0;
    //In this question, the indices i and j starts from 1 not 0;
    let i = 1;
    let j = A.length;
    /*
    debugger;
    while (i <= A.length && j > 0) {
        debugger;
        diagonalSum += parseInt(A[i][j], 10);
        i++;
        j--;
    }
    debugger;
    */
    return diagonalSum;
}

calculateMinimumDiagonalSum(array);