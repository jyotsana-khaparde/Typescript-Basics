
type comboTypes = number | string // type aliases
type comboLiteral = 'as-number' | 'as-string' // type aliases

function literalCombine(
    input1: comboTypes,
    input2: comboTypes,
    resultConversion: comboLiteral
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // +input1 this will convert string in number
    } else {
        result = `${input1} ${input2}`;
    }
    return result;
}

const combo1 = literalCombine(50, 20, 'as-number')
console.log('combo1: ', combo1);

const combo2 = literalCombine('jyo', 'singh', 'as-string')
console.log('combo2: ', combo2);

const combo3 = literalCombine('10', '10', 'as-number')
console.log('combo3: ', combo3);
