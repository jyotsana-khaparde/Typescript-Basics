// let myname: string = '5'//'jyotsana khaparde..';
// console.log('myname:-', myname);


let a: string
a= 'jyotsan';
console.log(a);

// let numdata: number[];
// numdata = 10
//  = ['a', 'b', 'c']
// num.push('d')
// num = [100]
// console.log(numdata);
// let tupleEx: [string, number] = [23, 'asd']


//function
function returnMyName(): string {
    let myname = 'jyo';
    return myname;
}
console.log(returnMyName());

//void
function sayHello(): void {
    console.log('say hello...');
}

// argument type
function returnAge(age: number): number {
    return age;
}
console.log(returnAge(23));

// -> objects
let infoObject: {
    name: string,
    age: number
} = {
    name: 'jyotsana',
    age: 23
}
// infoObject = {
//     name: 'rupali',
//     age: 25
// }
 console.log(infoObject);
 

 // -> complex object
let complex1: {
    data: number[],
    output: () => number[]
} = {
    data: [1,2,3, 4],
    output: function () {
        return this.data
    }
}

// -> type alias
type complex = {
    data: number[],
    output: () => number[]
}

let complex2: complex = {
    data: [1,2,3, 4],
    output: function () {
        return this.data
    }
}

console.log(complex2.data);

// -> union types
let myRealAge: number | string = 23
myRealAge = '12'
// myRealAge = true

// -> Nullable Types
let canBeNull = 12;
// canBeNull = null // "strictNullChecks": true <canBeNull = null> does not allow
let canAlsoBeNull;
canAlsoBeNull = null

let canBeNullIfAssignCheck: number | null = 12 // if want to reassign null value then need to give union type <number | null>
canBeNullIfAssignCheck = null

let canThisBeAny = null;
canThisBeAny = 12

function checkNull(isTrue:boolean, somethingElse: boolean) {
    let result: number
    if (isTrue) {
        result = 23
    }
    result = 11
    return result;
}
