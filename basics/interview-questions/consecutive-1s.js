let array = "11010110000000000";

const countConsecutiveNumber = (A, length, count) => {
    let answer = 0;
    for (let i = 0; i < length; i++) {
        if (A[i] === 0) {
            debugger;
            let left = 0, right = 0;
            //count 1's on lhs
            for (let j = i - 1; j >= 0; j--) {
                if (A[j] === 1) {
                    left++;
                } else {
                    break;
                }
            }
            //count 1's on rhs
            for (let j = i + 1; j < length; j++) {
                if (A[j] === 1) {
                    right++;
                } else {
                    break;
                }
            }
            debugger;
            let total = (left + right);
            if (total < count) {
                total = total + 1;
            }
            if (total > answer) {
                answer = total;
            }
        }
    }
    debugger;
    return answer;
}

const getNumber = (A) => {
    let count = 0, answer = 0;
    const length = A.length;
    for (let i = 0; i < length; i++) {
        if (A[i] === 1) {
            count++;
        }
    }
    debugger;
    if (count === length) {
        return length;
    } else if (count === 0) {
        return 0;
    }
    debugger;
    answer = countConsecutiveNumber(A, length, count);
    debugger;
    return answer;
}

console.log(getNumber(array));