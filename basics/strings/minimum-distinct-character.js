
let A = "zjeeuhmsrqcozijipfioneeddpszrnavymmtatbdzqsoemuvnpppsuacbazuxmhecthlegrpunkdmbppweqtgjoparmowzdqyoxytjbbhawdydcprjbxphoohpkwqyuhrqzhnbnfuvqnqqlrzjpxiogvliexdzuzosrkrusvojbrzmwzpowkjilefraamdigpnpuuhgxpqnjwjmwaxxmnsnhhlqqrzudltfzotcjtnzxuglsdsmzcnockvfajfrmxothowkbjzwucwljfrimpmyhchzriwkbarxbgfcbceyhjugixwtbvtrehbbcpxifbxvfbcgkcfqckcotzgkubmjrmbsztsshfroefwsjrxjhguzyupzwweiqurpixiqflduuveoowqcudhnefnjhaimuczfskuiduburiswtbrecuykabfcvkdzeztoidukuhj";
let B = 19;

const getCharacterFrequecyList = (A) => {
    let charFrequency = new Array(26);
    let asciiCodeA = 'a'.charCodeAt();
    for (let i = 0; i < A.length; i++) {
        index = A[i].charCodeAt() - asciiCodeA;
        charFrequency[index] = (charFrequency[index] == undefined) ? 1 : (charFrequency[index] + 1);
    }
    return charFrequency.sort((a, b) => {
        return (a - b);
    });
}

const getMinimumCharacters = (A, B) => {

    let charsReplaced = 0, sum = 0;
    let charFreq = getCharacterFrequecyList(A);
    let distinctCharacters = charFreq.filter((item) => (item > 0));
    debugger;

    for (let i = 0; i < charFreq.length; i++) {
        if (sum + charFreq[i] <= B) {
            sum += charFreq[i];
            charsReplaced++;
        } else if (sum + charFreq[i] > B) {
            break;
        }
    }
    debugger;
    return (distinctCharacters.length - charsReplaced);

}

console.log(getMinimumCharacters(A, B));



