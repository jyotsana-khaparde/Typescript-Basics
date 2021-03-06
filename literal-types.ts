
function literalCombine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-string' // literal type: where we take constant instead of number, string etc. enum could also be use here.
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // +input1 this will convert string in number
    } else {
        result = `${input1} ${input2}`;
    }
    return result;
}

const combo1 = literalCombine(10, 20, 'as-number')
console.log('combo1: ', combo1);

const combo2 = literalCombine('rupali', 'khaparde', 'as-string')
console.log('combo2: ', combo2);

const combo3 = literalCombine('20', '20', 'as-number')
console.log('combo3: ', combo3);
