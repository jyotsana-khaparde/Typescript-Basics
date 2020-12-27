function addNumber(num1: number, num2: number, showResult: boolean, phrase: string) {
    let sum = num1 + num2;
    if (showResult) {
        console.log(phrase + sum);
    } else {
        return num1 + num2;
    }
}

const number1 = 10;
const number2 = 30;
const printResult = true;
const printPhrase = 'Result is:';

const result = addNumber(number1, number2, printResult, printPhrase);
console.log('result is---->', result);

