// let myname: string = '5'//'jyotsana khaparde..';
// console.log('myname:-', myname);
var a;
a = 'jyotsan';
console.log(a);
// let numdata: number[];
// numdata = 10
//  = ['a', 'b', 'c']
// num.push('d')
// num = [100]
// console.log(numdata);
// let tupleEx: [string, number] = [23, 'asd']
//function
function returnMyName() {
    var myname = 'jyo';
    return myname;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log('say hello...');
}
// argument type
function returnAge(age) {
    return age;
}
console.log(returnAge(23));
// -> objects
var infoObject = {
    name: 'jyotsana',
    age: 23
};
// infoObject = {
//     name: 'rupali',
//     age: 25
// }
console.log(infoObject);
// -> complex object
var complex1 = {
    data: [1, 2, 3, 4],
    output: function () {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3, 4],
    output: function () {
        return this.data;
    }
};
console.log(complex2.data);
// -> union types
var myRealAge = 23;
myRealAge = '12';
// myRealAge = true
// -> Nullable Types
var canBeNull = 12;
// canBeNull = null // "strictNullChecks": true <canBeNull = null> does not allow
var canAlsoBeNull;
canAlsoBeNull = null;
var canBeNullIfAssignCheck = 12; // if want to reassign null value then need to give union type <number | null>
canBeNullIfAssignCheck = null;
var canThisBeAny = null;
canThisBeAny = 12;
function checkNull(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 23;
    }
    result = 11;
    return result;
}
