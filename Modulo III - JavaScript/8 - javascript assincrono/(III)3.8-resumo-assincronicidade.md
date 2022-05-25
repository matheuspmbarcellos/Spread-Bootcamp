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
