// -> Block scope
console.log('-----BLOCK SCOPE----');

let variable = 'Test';
function reset() {
    // console.log('Block0: ',variable);
    let variable = null;
    console.log('Block1: ', variable);
}
reset();
console.log('Block2: ', variable);

// -> Arrow Function
console.log('-----ARROW FUNCTIONS-----');
let addNumners = function (num1: number, num2: number): number {
    return num1 + num2
}
console.log(addNumners(3, 4));

let mulNumbers = (num1: number, num2: number) => num1 * num2
console.log(mulNumbers(3, 4));

let greetFriend = (friend: string) => console.log(friend);
greetFriend('hello jyotsana');

// -> DEFAULT PARAMETER
console.log('-----DEFAULT PARAMETER-----');
const countDown = (start: number = 10): void => {
    console.log("Before done-> ", start);
    while (start > 0) {
        start--;
    }
    console.log("Done-> ", start);
}
// countDown(20)
countDown()

// -> SPREAD OPERATOR
console.log('-----SPREAD OPERATOR-----');
const numbers = [1, 10, 99, -5];
console.log('without SPREAD:- ', Math.max(1, 10, 99, -5));
console.log('with SPREAD:- ', Math.max(...numbers));

// -> REST OPERATOR
console.log('-----REST OPERATOR-----');
let myName = ["Marina", "Magdy", "Shafiq"];
const [firstName, ...familyName] = myName;
console.log(firstName); // Marina ;
console.log(familyName); // [ "Magdy" , "Shafiq"] ;

let MyNickName = {
    sName: 'jyotsana',
    gName: 'rupali',
    saName: 'sonu'
}

const { sName, ...data } = MyNickName
console.log("sName:-", sName, data);
