# Modulos
## O que são módulos?
Módulos são arquivos javascript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

Algumas vantagens:
* Organização do código
* Compartilhamento de variáveis em escopos diferentes
* Explicita as dependências dos arquivos.

## Exportar
* Named exports

        export function exemplo1(param){
            return 
        }
        export function exemplo2(param){
            return 
        }
        export function exemplo3(param){
            return 
        }


        ou


        function exemplo1(param){
            return 
        }
        function exemplo2(param){
            return 
        }
        function exemplo3(param){
            return 
        }

        export {
            exemplo1,
            exemplo2,
            exemplo3
        }

## Importar
* Named exports:

        import { funcao, variavel, classe } from './arquivo.js'

* Trocando nome de imports:

        import { arquivo as Apelido } from './arquivo.js'
    
* Importando todos os dados de um arquivo:

        import * as Apelido from './arquivo.js'

## Vincular ao HTML
    <script type="module" src="./main.js"></script>

## Curiosidades
* Módulos sempre estão em "strict mode".
* Podem ser utilizadas as extensões .js e .mjs.
* Para testes locais, é necessário utilizar um servidor.
* Ao importar, sempre lembre da extensão.
* Ao importar, sempre utilize "./" como ponto de partida.