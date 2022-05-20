# Metodos (Map, Filter e Reduce)

[Mozilla.org - Métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Map
* Cria um novo array.
* Não modifica o array original.
* Realiza as operações em ordem.

### Sintaxe
    array.map(callback, thisArg)

        * callback(item, index, array)

* Callback: função a ser executada em cada elemento.
* thisArg(opcional): valor de 'this' dentro da função de callback.

### Map vs forEach
    // usando map
    const array = [1, 2, 3, 4, 5];
    array.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10];

    // usando forEach
    const array = [1, 2, 3, 4, 5];
    array.forEach((item) => item * 2); // retorno: undefined
* Valor de retorno.
* Considere se o array auxiliar será necessário.

## Filter
#### O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

    function isBigEnough(value) {
        return value >= 10;
    }

    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtrado é [12, 130, 44]

### Sintaxe
    var newArray = arr.filter(callback[, thisArg])

### Parâmetros
* *callback* :
    Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:

* *element* : 
    O elemento que está sendo processado no array.
* *index* :
    O índice do elemento atual que está sendo processado no array.
* *array* :
    O array para qual filter foi chamada.

* *thisArg* :
    Opcional. Valor a ser usado como this durante a execução do callback.

### Valor de retorno
Um novo array com os elementos que passaram no teste.

## Reduce
#### O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => 
        previousValue + currentValue,
        initialValue
    );

    console.log(sumWithInitial);
    // expected output: 10

A função reducer recebe quatro parâmetros:

1. Acumulador (acc)
2. Valor Atual (cur)
3. Index Atual (idx)
4. Array original (src)

O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

### Sintaxe
    array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))