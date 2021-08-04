//type aliases / custom types

type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text';
type User = {name: string; age: number};

const user: User = {name: 'Karina', age: 32};

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescription) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames);


function greet(user: User) {
    console.log('Hi, I am' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}