let words = [
    '#STALL#20#3@1',
    '#POR#20#3@2',
    '#POR#20#3@3',
    '#STALL#20#DONE',
]

let regex = /#(POR|STALL)#(\d+)#((\d+)@(\d+)|DONE)/

let result = words.map(word => word.match(regex))

console.log(result)