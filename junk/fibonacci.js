function Fibonacci(valor) {
    var anterior = 0;
    var atual = 1;
    var proximo = 1;

    for (let i = 0; i < valor; i++) {
        // console.log(`Iteração > ${i} : Valor > ${proximo}`);
        anterior = atual + proximo;
        atual = proximo
        proximo = anterior
    }
    console.log(atual)
}

const time = 1_000_000_00

// Fibonacci(100000)

function* returnObjectValue(any) {
    const value = any
    console.log(any.things)
    console.log('First next')
    const iterator = yield { message: 'Hello' };
    console.log('Second next')
    console.log(iterator)
    Fibonacci(time);
    yield 2;
    Fibonacci(time);
    console.log(`%cValue sent before >> ${value}`, 'color: red; font-size: 20px;')
    return 3;
}

function* generator() {
    while (true) {
        const mec = yield 'Hello'
        console.log(typeof mec)
        mec()
    }
}

function consoling(string) {
    console.log(string)
}

function * functionalize(fn) {
    yield 1
    let fnc = fn
    while (true) {
        // if(typeof fnc === 'function') {
        //     yield fnc()
        // }
        console.log('inside yield', fnc)
        fnc = yield fnc()
        console.log('after yield', fnc)
        // let fnc = yield fnc()
    }
}

const main = () => {
    const gen = functionalize(consoling)
    console.log(gen.next(consoling('clo before')))
    console.log(gen.next(consoling('clo after')))
    // console.log(gen.next(consoling))
    // console.log(gen.next(consoling))
    // console.log(gen.next(consoling))
}

main()