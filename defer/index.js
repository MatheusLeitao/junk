const { defer } = require("lodash");
const _ = require("lodash");

const test = (thiss) => {
    console.log(this)
    console.log('mec')
}

function main(){
    defer(test(this))
    console.log("Hello World");
    return 'umdoistres'
}


console.log(main())