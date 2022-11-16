let A = "40897237111816995922805307737859413552091006514927603847883130124746756767426237849396480087733429432861339411285568084588535007444731";

const divisibleBy8 = (A) => {
    debugger;
    let num = Number(A[(A.length - 3)] + A[(A.length - 2)] + A[(A.length - 1)]);
    if ((num % 8) === 0) {
        return 1;
    }
    return 0;
}


console.log(divisibleBy8(A));