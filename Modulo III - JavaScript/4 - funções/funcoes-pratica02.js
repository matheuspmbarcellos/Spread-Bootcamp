const pessoa1 = {
    nome: 'Matheus',
    idade: 26,
}

const pessoa2 = {
    nome: 'Marianna',
    idade: 24,
}

function calculaIdade (anos) {
    return `Daqui a ${ anos } anos, ${ this.nome } terá ${ this.idade + anos } anos de idade.`
}

console.log(calculaIdade.call(pessoa1, 20))