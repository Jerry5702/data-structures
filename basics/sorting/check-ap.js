let A = [-251, -305, -323, -53, -215, -143, -107, -161, -179, -431, -449, -17, -341, -413, -35, -125, -197, -377, -269, -71, -359, -89, -233, -287, -395]


const checkAP = (A) => {
    A.sort((a, b) => {
        return (a - b);
    });
    debugger;
    let difference = (A[0] - A[1]);
    debugger;
    for (let i = 1; i < (A.length - 1); i++) {
        if ((A[i] - A[i + 1]) !== difference) {
            return 0;
        }
    }
    debugger;
    return 1;
}


console.log(checkAP(A));