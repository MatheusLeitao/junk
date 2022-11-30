// export const addTwoNumbers = (a: number, b: number) => a + b;


export const addTwoNumbers = <Arg>(params: Arg) => {
    Object.keys(params).reduce((acc, next) => acc = params[next], 0)
    return params[Object.keys(params)[0]] + params[Object.keys(params)[1]]
}

const value = addTwoNumbers({a: 1, b: 2})