let A = [
    6, 31, 33, 13, 82, 66, 9, 12, 69, 21, 17, 2, 50, 69, 90, 71, 31, 1, 13, 70, 94, 46, 89, 13,
    55, 54, 67, 97, 28, 27, 62, 34, 41, 18, 15, 35, 13, 84, 93, 27, 89, 23, 6, 56, 94, 40, 54, 95, 47
]
let B = [
    88, 85, 98, 36, 66, 40, 30, 26, 51, 77, 62, 60, 92, 64, 53, 86, 24, 53, 85, 49, 57, 29, 32, 60,
    75, 82, 17, 23, 67, 51, 23, 11, 70, 59
]

A = [1, 2, 3, 4, 5]
B = [2, 3]

const reverseArray = (arr, sIndex, eIndex) => {
    let i = sIndex, j = eIndex;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

//param A : array of integers
//param B : array of integers
//return a array of array of integers
const leftRotatedArray = (A, B) => {
    let answer = new Array();
    let i = 0;
    if (A.length > 0 && B.length > 0) {
        let n = A.length;
        while (i < B.length) {
            debugger;
            let temp = [...A];
            let k = B[i];
            k = (k % n);
            if (k > 0) {
                //reverse the complete array;
                temp = reverseArray(temp, 0, (n - 1));
                //reverse the initial (n-k)th elements
                temp = reverseArray(temp, 0, (n - k - 1));
                //reverse the final kth elements
                temp = reverseArray(temp, (n - k), (n - 1));
            }
            debugger;
            //insert the left-rotated array in answer
            answer.push(temp);
            i++;
        }
    }
    debugger;
    return answer;
}



console.log(leftRotatedArray(A, B));
