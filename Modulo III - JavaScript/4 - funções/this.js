const pessoa = {
    firstName: "André",
    lastName : "Soares",
    id       : 1,
    fullName : function() {
        console.log(this.firstName + " " + this.lastName) ;
    },
    getId: function () {
        console.log(this.id);
    }
};

pessoa.fullName()
pessoa.getId()


// Call

const pessoa2 = {
    name: 'Miguel',
}

const animal = {
    name: 'Murphy',
}

function getSomethings() {
    console.log(this.name)
}

getSomethings.call(animal);

// passando parametros

const myObj = {
    num1: 2,
    num2: 4,
}

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1, 5)

// Bind
const retornaNomes = function () {
    console.log(this.nome)
}

let bruno = retornaNomes.bind({ nome: 'Bruno' })

bruno();