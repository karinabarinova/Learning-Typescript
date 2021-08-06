// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string;
}

interface Greetable extends Named {    
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;
    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name );
    }
}

let user1: Greetable;
user1 = new Person('Karina');

user1.greet('Hi there, I am');
console.log(user1);
// user1.name = 'Karl'; --won't work bcause of readonly