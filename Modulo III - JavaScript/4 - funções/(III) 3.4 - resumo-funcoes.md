# Funções em javascript

## Estrutura de uma função:

    function nome(parametros) {
        // instruções
        return; //valor de retorno
    }
* Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
* Quando invocamos o "return", a função para de ser executada.

### Declarando uma função:

    function soma(a, b) {
        return a + b
    }

### Chamando uma função:

    function soma(a, b) {
        return a + b
    }

    soma(3, 5)    <----

### Mostrando uma função no console:

    function soma(a, b) {
        return a + b
    }

    console.log(soma(3, 5))    <----

## Função Anônima
#### Funções que representam expressões
    const soma = function (a, b) {
        return a + b;
    }

    soma(1, 2) // 3
    soma(5, 4) // 9
* Uma variável pode armazenar uma função.

## Função autoinvocável
#### IIFE (Immediately Invoked Function Expression)
    (
        function() {
            let name = "Digital Innovation One"
            return name;
        }
    )();
---
    (
        function(a, b) {
            return a + b;
        }
    )(1, 2);

    // 3
---

    const soma3 = (
        function() {
            return a + b;
        }
    )(1, 2);

    console.log(soma3); // 3


* É uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
* Também pode ser utilizada com parâmetros ou armazenada em uma variável.

## Callbacks
#### Uma função passada como argumento para outra.
    const calc = function(operacao, num1, num2) {
        return operacao(num1, num2);
    }
    const soma = function(num1, num2) {
        return num1 + num2;
    }
    cons sub = function(num1, num2) {
        return num1 - num2;
    }

    const resultSoma = calc(soma, 1, 2);
    const resultSub = calc(sub, 1, 2);

    console.log(resultSub); // -1
    console.log(resultSoma); // 3
* Utilizando callbacks, você tem maior controle da ordem de chamdas.

### Valores padrão
    ...function exponencial(array, num = 1) //valor padrão = 1

### Objeto "arguments"
#### É uma coleção ou array de todos os parâmetros passados numa função. Exemplo:
    function findMax() {
        let max = -Infinity;

        for(let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max
    }

    -> findMax(1, 2, 3, 6, 90, 1)
    <- 90
---
    function showArgs() {
        return arguments; 
    }
    
    //retornará cada argumento com sua respectiva posição.

## Arrays
### -> Spread
#### Uma forma de lidar separadamente com elementos.
    function sum(x,y,z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];

    console.log(sum(...numbers));

* O que era parte de um array se torna um elemento independente.

### -> Rest
#### Combina os argumentos em um array
    function confereTamanho(...args) {
        console.log(arg.length)
    }

    confereTamanho() // 0
    confereTamanho(1, 2) // 2
    confereTamanho(3, 4, 5) // 3

* O que era um elemento independente se torna parte de um array

## Objetos
### -> Object Destructuring
    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    function userId({id}) {
        return id;
    }

    function getFullName({fullName: {firstName: first, lastName: last}}) {
        return `${first} ${last}`;
    }

    userId(user) // 42
    getFullName(user) // John doe
* Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

## If / else
    function numeroPositivo(num) {
        let resultado;

        if(num < 0) {    //CONDIÇÃO
            resultado = false;   //DECLARAÇÃO 1
        } else {
            resultado = true;  //DECLARAÇÃO 2
        }
        
        return resultado;
    }

    numeroPositivo(2)
    // true

    numeroPositivo(-9)
    //false

    - Declaração 1(dentro de if): Caso a condição seja verdadeira.
    - Declaração 2(dentro de else): Caso a condição seja falsa.
---
    function numeroPositivo4(num) {
        const ehNegativo = num < 0
        const maiorQuedez = num > 10

        if(ehNegativo) {
            return "Esse número é negativo!"
        } else if(!ehNegativo && maiorQuedez) {
            return "Esse número é positivo e maior que dez!"
        }

        return "Esse número é positivo!"
    }
* Javascript **não tem elsif**, as palavras sempre estão espaçadas.

## Switch/case
    function getAnimal(id) {
        switch(id) {
            case 1:
                return "cão";
            case 2:
                return "gato;
            case 3:
                return "pássaro";
            default;
                return "id inválida"
        }
    }
* Equivale a uma comparação de tipo e valor (===).
* Sempre precisa de um valor "default".
* Ideal para quando se precisa comparar muitos valores.

## For
#### Loop dentro de elementos iteráveis(arrays, string).
    function multiplicaPorDois(arr) {
        let multiplicados = []

        for(let i = 0; i < arr.length; i++) {
            multiplicados.push(arr[i]*2)
        }

        return multiplicados
    }

    const meusNumeros = [2, 33, 456, 356, 40]

    multiplicaPorDois(meusNumeros);
    // [4, 66, 912, 712, 80]
## For...in
#### Loop entre propriedades enumeráveis de um objeto.
    function forInExemplo1(obj) {
        for(prop in obj) {
            console.log(prop)
        }
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }

    forInExemplo1(meuObjeto);
    //nome
    //idade
    //cidade
---
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

    forInExemplo2(meuObjeto);
    //João
    //20
    //Salvador

## For...of
#### Loop entre estruturas iteráveis(arrays, string).
    function logLetras(palavra) {
        for(letra of palavra) {
            console.log(letra)
        }
    }

    const palavra ="abacaxi"

    logLetras(palavra);
    // a
    // b
    // a
    // c
    // a
    // x
    // i
---
    function logNumeros(nums) {
        for(num of nums) {
            console.log(num)
        }
    }

    const nums = [30, 20, 233, 2]

    logNumeros(nums)
    // 30
    // 20
    // 233
    // 2

## While
#### Executa instruções até que a condição se torne falsa.
    function exemploWhile() {
        let num = 0

        while(num <= 5) {
            console.log(num);
            num++;
        }
    }

    exemploWhile()
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5

## Do...while
#### Executa instruções até que se tornem falsa. Porém, a primeira execução sempre ocorre.
    function exemploWhile2() {
        let num = 6

        do {
            console.log(num);
            num++;
        } while(num <= 5) 
    }

    exemploWhile2()
    // 6

## This
#### A palavra **this** é uma referência de contexto. No exemplo, this refere-se ao objeto pessoa
    const pessoa = {
        firstName: "André",
        lastName : "Soares",
        id       : 1,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        },
        getId: function() {
            return this.id;
        }
    };

    pessoa.fullName()
    // "André Soares"

    pessoa.getid()
    // 1

* Seu valor pode mudar de acordo com o lugar no código onde foi chamada:


Contexto            | Referencia
:-----------------: | :------------:
Em um objeto(método) | Próprio objeto dono do método
Sozinha  | Objeto global(em navegadores *window*)
Função | Objeto global
Evento | Elemento que recebeu o evento

* ### Call
     Utilizado para determinar a qual objeto o this deve se referir.
#### Exemplo:
    const pessoa2 = {
        nome: 'Miguel',
    };

    const animal = {
        nome: 'Murphy',
    };

    function getSomethings() {
        console.log(this.name);
    }

    getSomethings.call(animal);
    // Murphy

#### É possível passar parâmetros para essa função separando-os por vírgulas:
    const myObj = {
        num1 = 2,
        num2 = 4,
    }

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b)
    }

    soma.call(myObj, 1, 5);
    // 12

    soma.apply(myObj, [1, 5])
    // 12
* Com o *apply*, é possível passar parâmetros para essa função dentro de um array.

### Bind
#### Clona a estutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.
    const retornaNomes = function() {
        return this.nome;
    }

    let bruno = retornaNomes.bind({ nome: 'Bruno' })

    bruno()
    // Bruno

## Arrow Functions
    - PADRÃO

    const helloWorld = function() {
        return "Hello World";
    }

    - ARROW FUNCTION

    const helloWorld = () => { return "Hello World";
    }

    ou

    const helloWorld = () => "Hello World";

    ou

    const soma = (a, b) => a + b;

    soma(4, 6)
    // 10

    ou

    const soma = a => a;

    soma(4)
    // 4

* Caso exista apenas uma linha, pode dispensar as chaves e o return.
* Caso exista apenas um parâmetro, pode dispensar os parênteses.
* Arrow function NÃO faz hoisting.

### Algumas Restrições
* "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar.
* Não existe o objeto "arguments".
* O construtor (ex: new MeuObjeto()) também não pode ser utilizado.