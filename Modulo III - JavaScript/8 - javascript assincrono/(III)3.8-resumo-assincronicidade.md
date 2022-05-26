# Assincronicidade
### *Definição*
"Que não ocorre ou não se efetiva ao mesmo tempo"

## Promises
#### Objeto de processamento assíncrono.
#### Inicialmente, se valor é desconhecido(pending). Ela pode, então, ser **resolvida** (*.then()*) ou **rejeitada** (*.catch()*). Exemplo:
    const myPromise = new Promise((resolve, reject) => {
        window.setTiomeout(() => {
            resolve(console.log('Resolvida!'));
        }, 2000);
    });
### *Manipulação*
    const myPromise = new Promise((resolve, reject) => {
        window.setTiomeout(() => {
            resolve('Resolvida');
        }, 2000);
    });

    await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));

    // após 2 segundos, retornará o valor
    // "Resolvida passando pelo then e agora acabou!"

## Async/await
#### Funções assíncronas precisam dessas duas palavras chave.
    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject) => {
            window.setTiomeout(() => {
                resolve('Resolvida');
            }, 3000);
    });

        const resolved = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));
        
        return resolved;
    }

##  APIs
*Application Programming Interface*

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end. 

Você consegue acessá-las por meio de URLs.

### *JSON*
#### *Javascript Object Notation*
    {
        "description": "schema POST bank",
        "type": "object",
        "properties": {
            "id": {
                "type": "number",
                "minimum": 0
            },
            "code": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    }

É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.

### Fetch
* #### Consumindo APIs
        fetch(url, options)
            .then(response => response.json())
            .then(json => console.log(json))
    
        // retorna uma Promise

* #### Operação no banco(POST, GET, PUT, DELETE, etc)
        fetch('https://endereco-api.com/', {
            method: 'GET',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(json => console.log(json))
    
        // retorna uma Promise
        
        __________________________________________

        fetch('https://endereco-api.com/', {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => console.log(json))
    
        // retorna uma Promise