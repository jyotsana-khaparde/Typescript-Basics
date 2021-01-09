function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = `${input1} ${input2}`;
    }
    return result;
}

const combon1 = combine(10, 20)
console.log('combon1: ', combon1);

const combon2 = combine('rupali', 'khaparde')
console.log('combon2: ', combon2);
