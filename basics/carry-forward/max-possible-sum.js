let array = [-533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173,
    436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35,
    894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243, -963, -141, -277, 741, 529,
-222, -684, 35
];

array = [
    -584, -714, -895, -512, -718, -545, 734, -886, 701, 316, -329, 786, -737, -687, -645, 185, -947, -88, -192, 832, 
    -55, -687, 756, -679, 558, 646, 982, -519, -856, 196, -778, 129, -839, 535, -550, 173, -534, -956, 659, -708, -561, 
    253, -976, -846, 510, -255, -351, 186, -687, -526, -978, -832, -982, -213, 905, 958, 391, -798, 625, -523, -586, 
    314, 824, 334, 874, -628, -841, 833, -930, 487, -703, 518, -823, 773, -730, 763, -332, 192, 985, 102, -520, 213, 
    627, -198, -901, -473, -375, 543, 924, 23, 972, 61, -819, 3, 432, 505, 593, -275, 31, -508, -858, 222, 286, 64, 900, 
    187, -640, -587, -26, -730, 170, -765, -167, 711, 760, -104, -333
]

const getMaxSum = (A, B, prefix, suffix) => {
    debugger;
    let length = A.length;
    let maxSum = Number.NEGATIVE_INFINITY;
    let difference = (length - (B + 1));

    for (let i = 0; i < (B); i++) {
        if (i === (B - 1)) {
            maxSum = Math.max(maxSum, prefix[i]);
        } else {
            maxSum = Math.max(maxSum, (prefix[i] + suffix[(i + difference + 1)]));
        }
    }
    debugger;
    console.log(maxSum);
    return maxSum;
}

const findMaxPossibleSum = (A, B) => {
    let prefix = [];
    let suffix = [];
    let length = A.length;
    prefix.push(A[0]);
    suffix.push(A[length - 1]);
    for (let i = 1; i < A.length; i++) {
        prefix.push(prefix[i - 1] + A[i]);
        suffix.push(suffix[i - 1] + A[length - (i + 1)])
    }
    suffix.reverse();
    console.log(prefix);
    console.log(suffix);
    debugger;
    if (A.length >= B) {
        return getMaxSum(A, B, prefix, suffix);
    }
    return 0;
}

let sum = findMaxPossibleSum(array, 32);
