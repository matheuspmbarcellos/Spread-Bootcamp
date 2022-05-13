function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(findMax(1, 3, 500, 2, -3, 2**10))


function showArgs() {
    console.log(arguments);
}

console.log(showArgs(1, 3, 500, 2, -3, 2**10));

