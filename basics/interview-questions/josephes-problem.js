const lastStandingPerson = (A) => {
    let closestPowerOf2 = 1;
    while (closestPowerOf2 <= A) {
        debugger;
        if (closestPowerOf2 * 2 < A) {
            closestPowerOf2 *= 2;
        } else {
            break;
        }
    }
    debugger;
    //closestPowerOf2 = parseInt(Math.log2(A), 10);
    let Kills = A - closestPowerOf2;
    let lastStandingPerson = 1 + (2 * Kills);
    debugger;
    return lastStandingPerson;
}


console.log(lastStandingPerson(9));