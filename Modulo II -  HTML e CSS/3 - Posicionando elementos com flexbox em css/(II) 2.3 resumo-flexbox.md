# Flexbox em CSS

### Display : flex;

Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se flex items. Exemplos de tags:

    div, span, section, h1, h2,..., a

* ## Flex-direction
    
    - É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.
        - row(padrão): à direção do texto, esquerda para direita.
        - row-reverse: sentido oposto à direção do texto.
        - columm: ordenação de cima para baixo, em coluna única.
        - columm-reverse: ordenação inversa, de baixo para cima.

* ## Flex-wrap

    - É a propriedade que define se os itens devem ou não quebrar a linha.
    Por padrão, eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.
        - nowrap: é o padrão, não permite a quebra de linha.
        - wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.
        - wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima.

* ## Flex-flow
    - É um atalho para as propriedades **flex-direction** e **flex-wrap**. 
    Porém, seu uso não é tão comum, visto que, quando mudamos o flex-direcion para columm, mantemos o padrão do flex-wrap que é nowrap. 

* ## Justify Content
    - Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

    - Obs: caso seus itens esteja ocupando 100% de todo container, ele não se aplica

        - **flex-start**: início do container. (padrão)
        - **flex-end**: final do container.
        - **center**: ao centro do container.
        - **space-between**: cria um espaço igual entre os elementos.
        - **space-around**: os epaçamentos do meio são duas vezes maiores que o inicial e final.

* ## Align-items
    - Trata do alinhamento dos flex itens de acordo com o eixo do container.
    - O alinhamento é diferente para quando os itens estão em colunas ou linhas.
    - Permite o alinhamento central no eixo vertical.
        - **center**: alinhamento dos itens ao centro.
        - **stretch**: padrão, e os flex items cresçam igualmente.
        - **flex-start**: alinhamento dos itens no início.
        - **flex-end**: alinhamento dos itens no final.
        - **baseline**: alinhamento de acordo com a linha base da tipografia dos itens.

* ## Align-content
    - É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.
    - Necessário que o container utilize quebra de linhas(wrap).
    - Necessário que a altura do container seja maior que a soma das linhas dos itens.
        - **stretch**: padrão, e os flex items cresçam igualmente.
        - **center**: ao centro do container.
        - **flex-start**: alinhamento dos itens no início.
        - **flex-end**: alinhamento dos itens no final.
        - **space-between**: cria um espaço igual entre os elementos.
        - **space-around**: os epaçamentos do meio são duas vezes maiores que o inicial e final.
        
