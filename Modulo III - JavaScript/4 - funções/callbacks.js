const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 2, 4);
const resultSub = calc(sub, 3, 1);

console.log(resultSub)
console.log(resultSoma)