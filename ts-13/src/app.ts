//rest params

const add = (...params: number[]) => {
    return params.reduce((cur, value) => {
        return cur + value;
    }, 0)
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 9));