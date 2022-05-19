function filtrarPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const nums = [1, 24, 55, 66, 71, 80]

console.log(filtrarPares(nums))