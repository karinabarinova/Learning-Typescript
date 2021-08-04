//the unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Karina';
// userName = userInput; //won't work

if (typeof userInput === 'string') { //but if it is a string, all good
    userName = userInput;
}