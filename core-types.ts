// const READ = 0;
// const WRITE = 1;
// const ADMIN = 2;
enum ROLE { READ, WRITE, ADMIN } // enum can be use for constant identifier
// enum ROLE { READ = 1, WRITE, ADMIN } // this allow in enum
// enum ROLE { READ = 1, WRITE = 2, ADMIN = 3 } // this allow in enum

const person: {
    name: string, // string
    age: number, // number
    hobbies: string[], // array
    oddArray: [string, number] // tuple
    role: number,
    isAuthorize: boolean // boolean
} = {
    name: 'jyotsana',
    age: 24,
    hobbies: ['Dancing', 'Music'],
    oddArray: ['pune', 1],
    role: ROLE.ADMIN,
    isAuthorize: true
};

console.log('person-->', person.name);
person.hobbies.push('singing')

person.oddArray.push('mumbai') // this allow in tuple
// person.oddArray[0] = 12 // this won't allow we want only [string, number] type of tuple only rearrange value is not allow

for (let i = 0; i < person.hobbies.length; i++) {
    if (person.isAuthorize) {
        console.log(person.hobbies[i].toLocaleLowerCase());
    }
}

console.log('oddArray:- ', person.oddArray);


if (person.role == ROLE.ADMIN) {
    console.log('i am admin');
}