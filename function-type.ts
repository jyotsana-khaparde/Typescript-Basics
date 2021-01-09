function add(input1: number, input2: number) {
    return input1 + input2;
}

function printResults(num: number) {
    console.log('Result is:- ', num);
}

printResults(add(3, 2));

// let combinevalueEx: Function // function type
let combinevalueEx: (a: number, b: number) => number // function type

combinevalueEx = add;
// combinevalueEx = 15;

console.log('a----', combinevalueEx(8,8))