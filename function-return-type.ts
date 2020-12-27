
function add(input1: number, input2: number) {
    return input1 + input2;
}

function printResults(num: number) { // if function do not return anything that's the void return type
    console.log('Result is:- ',num);
}

// function printResults(num: number): undefined { // as it will print undefind, if you say undefined in function then you need to explicitli return; means it return undefined otherwise it will through error
//     console.log('Result is:- ',num);
//     return;
// }


printResults(add(3,2));
// console.log(printResults(add(3,2))); // it will print undefind because <printResults> this function didn't return anyhing
 