let A = "aaaabaaa";
A = "bb";


const expand = (array, p1, p2, type) => {
    while ((p1 >= 0 && p2 <= array.length) && (array[p1] === array[p2])) {
        p1--;
        p2++;
    }
    return (p2 - p1 - 1);
}

const getPalindromeString = (array, p1, p2, type) => {
    let palindrome = (type === 0) ? array[p1] : (array[p1] === array[p2]) ? (array[p1] + array[p2]) : '';
    while ((p1 >= 0 && p2 <= array.length) && (array[p1] === array[p2])) {
        p1--;
        p2++;
        debugger;
        if ((p1 >= 0 && p2 <= array.length) && (array[p1] === array[p2])) {
            palindrome = array[p1] + palindrome + array[p2];
        }
    }
    return palindrome;
}


const longestPalindrome = (A) => {
    let length = A.length;
    let answer = "";
    let p1 = 0, p2 = 0;
    let startIndex = p1;

    //max for odd length string
    for (let i = 0; i < length; i++) {
        p1 = i;
        p2 = i;
        debugger;
        let palindrome = getPalindromeString(A, p1, p2, 0);
        if (palindrome.length > answer.length) {
            answer = palindrome;
            startIndex = p1;
        }
    }
    debugger;
    //max for even length string
    for (let i = 0; i < (length - 1); i++) {
        p1 = i;
        p2 = (i + 1);
        debugger;
        let palindrome = getPalindromeString(A, p1, p2, 1);
        if (palindrome.length > answer.length) {
            answer = palindrome;
            startIndex = p1;
        }
    }

    return answer;
}

console.log(longestPalindrome(A));