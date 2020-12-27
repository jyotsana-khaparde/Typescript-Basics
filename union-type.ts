function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = `${input1} ${input2}`;
    }
    return result;
}

const combo1 = combine(10, 20)
console.log('combo1: ', combo1);

const combo2 = combine('rupali', 'khaparde')
console.log('combo2: ', combo2);
