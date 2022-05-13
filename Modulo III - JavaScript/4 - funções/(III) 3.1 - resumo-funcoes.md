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
### Spread
#### Uma forma de lidar separadamente com elementos.
    function sum(x,y,z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];

    console.log(sum(...numbers));

* O que era parte de um array se torna um elemento independente.

### Rest
#### Combina os argumentos em um array
    function confereTamanho(...args) {
        console.log(arg.length)
    }

    confereTamanho() // 0
    confereTamanho(1, 2) // 2
    confereTamanho(3, 4, 5) // 3

* O que era um elemento independente se torna parte de um array

## Objetos
### Object Destructuring
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













