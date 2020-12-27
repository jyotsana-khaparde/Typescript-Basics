function add(input1: number, input2: number) {
    return input1 + input2;
}

function printResults(num: number) {
    console.log('Result is:- ', num);
}

printResults(add(3, 2));

// let combinevalue: Function // function type
let combinevalue: (a: number, b: number) => number // function type

combinevalue = add;
// combinevalue = 15;

console.log('a----', combinevalue(8,8))