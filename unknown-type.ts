let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jyotsana';


// userName = userInput; // can not assign unknown value to a value which is already fixed.

if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}
