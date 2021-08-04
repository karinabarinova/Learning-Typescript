function add(n1: number, n2: number) { //number return type
    return n1 + n2;
}

function printResult(num: number) { //void return type
    console.log('Result: ' + num);
}

printResult(add(5, 100))

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));