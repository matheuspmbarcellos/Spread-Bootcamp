# Metodos (Map, Filter e Reduce)

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