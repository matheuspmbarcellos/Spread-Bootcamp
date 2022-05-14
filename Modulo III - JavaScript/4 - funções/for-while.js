// For
function multiplicaPorDois(arr) {
    let multiplicados = []

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i]*2)
    }
    
    return multiplicados
}

const meusNumeros = [2, 33, 456, 356, 40]

console.log(multiplicaPorDois(meusNumeros))

//For...in
function forInExemplo1(obj) {
    for(prop in obj) {
        console.log(prop)
    }
}

function forInExemplo2(obj) {
    for(prop in obj) {
        console.log(obj[prop])
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

console.log(forInExemplo1(meuObjeto))
console.log(forInExemplo2(meuObjeto))

// For...of
function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra)
    }
}

const palavra ="abacaxi"
logLetras(palavra);



function logNumeros(nums) {
    for(num of nums) {
        console.log(num)
    }
}

const nums = [30, 20, 233, 2]
logNumeros(nums)