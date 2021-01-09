
type comboTypes = number | string // type aliases
type comboLiteral = 'as-number' | 'as-string' // type aliases

function literalCombineEx(
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

const comboa1 = literalCombineEx(50, 20, 'as-number')
console.log('combo1: ', comboa1);

const comboa2 = literalCombineEx('jyo', 'singh', 'as-string')
console.log('combo2: ', comboa2);

const comboa3 = literalCombineEx('10', '10', 'as-number')
console.log('combo3: ', comboa3);
