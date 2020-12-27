function add(input1: number, input2: number) {
    return input1 + input2;
}

function printResults(num: number) {
    console.log('Result is:- ', num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResults(add(3, 2));

// let combinevalue: Function // function type
let combinevalue: (a: number, b: number) => number // function type

combinevalue = add;
// combinevalue = 15;

console.log('a----', combinevalue(8,8))


addAndHandle(10, 20, (result) => {
    console.log('result === ', result);
})