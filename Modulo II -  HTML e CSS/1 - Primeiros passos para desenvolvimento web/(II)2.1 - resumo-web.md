# Como funciona a Internet

### Redes

- Backbone: 
Gerenciadores de conexões, espalhados pelo mundo.

- Provedor de acesso:
Empresas telefônicas contratam o sinal do backbone e repassam ao usuário final.

- Provedor de serviço:
Dial-up, ADSL, fibra ótica, rádio, satélite, móvel, p2p*.

- Usuário final: Caminho inverso    
    -> www -> DNS -> IP -> classes de rede* -> 127.0.0.1.

### TCP/IP
Protocolos de comunicação entre computadores:

- Transmission Control Protocol - Protocolo de controle de transmissão.
- Internet Protocol - Protocolo de internet.

Modelo de camadas

1. Física (placa de rede)
2. Rede (IP)
3. Transporte (TCP, UDP)
4. Aplicação (Portas)

        20: FTP
        22: SSH
        25: SMTP (envio de e-mail)
        53: DNS (tradutor de nome de IP)
        80: HTTP (requisição simples na internet)
        443: HTTPS (requisição segura)

-Quais portas usadas pelo Gmail? 

    portas: 25, 465 ou 587.

-Quais portas usadas pelo banco de dados MySQL, e pelo servidor web Apache? 

    Porta 3306. Porta 443.

### Roteadores, Switches e modems

1. Roteadores
    - Distribui internet para um ou mais dispositivos de uma rede.
    - Pode fazer a comunicação entre eles.
    - Pode ser "burro".
2. Switches
    - criado para ser "inteligente".
3. Modems
    - MODulator-DEModulator
    - Hardware que converte dados em um formato que possa ser transmitido de um computador para outro e lido por outro.

### Dados móveis, Wi-fi e Bluetooth
        
1. Dados móveis
    - 3G (7 Mbps)
    - 4G (22,1 Mbps)
    - 5G (10 Gbps)
2. Wi-fi
    - WEP: chaves de 64 bits e de 128 bits
    - WPA: chave trocada periodicamente
    - WPA2 (AES) (802.11i)
        - Mais segurança
        - Mais lento
3. Bluetooth
    - Conexão ponto-a-ponto (sem necessidade de internet)

### Browser, sites, aplicativos e webserver

1. Browser
    - Sabe identificar várias LP, linguagens de marcação e conteúdo multimedia.
    - Hoje, os browsers fazem muito mais que isso, existem plug-ins, ou add-ons, que ajudam na navegação.
    - Cache e cookies.
    - [Como eram os sites antigamente](https://archive.org/web/)
2. Site
    - Página da internet.
    - Diversos propósitos.
    - Podem ser feitas em diversas LP.
    - D/XHTML caindo em desuso.
3. Aplicativos
    - Um software que é executado no navegador.
    - Um aplicativo de celular, muitas vezes, nada mais é do que uma espécie de navegador.
    - Hoje em dia, já quase não existe diferença entre site e aplicativo, e o primeiro está em declínio.
    - Outra diferença terminológica que está sumindo é entre programa/software e aplicativo.
4. E-commerce
    - Comércio eletrônico.
    - Site de compra e venda com sistema de pagamento.
    - O sistema de pagamento pode ser exterior ao site.
    - PicPay, boleto, pagseguro, Paypal, Mercado Pago.
5. Web-server
    - Existem 2 tipos: estático e dinâmico.
    - O estático é um servidor físico onde são armazenados arquivos, softwares e/ou banco de dados.
    - O dinâmico se refere aos softwares que estão presentes no servidor físico.
        1. Arquivos (file server).
        2. Aplicações (application server).
        3. Banco de dados (database).
        4. Tudo junto e misturado.
        - Um site, ou aplicativo, precisa estar hospedado em um servidor para poder ser acessado.
        - Os dados de um site precisam estar em um servidor.
        - O banco de dados de um site ou aplicativo precisa estar em um servidor.
6. Web-service
    - Interface disponível para fazer requisições e consultas em bancos de dados inacessíveis (Correios, Governo).

### Stacks

1. Front-end
    - "Parte da frente".
    - Site, software, aplicativo, web service.
    - Interface, UI, UX.
    - Lógica de programação, HTML, CSS, jQuery/JS/AJAX, PHP, bootstrap/outros frameworks.
2. Back-end
    - "Parte de trás".
    - Servidores, banco de dados.
    - "meio-de-campo" entre interface e banco de dados, regras de negócio, validações.
    - MySQL, Oracle, protocolos de comunicação, PHP, JAVA, node.js.
3. Fullstack
    - Profissional que sabe trabalhar em todas as camadas das tecnologias de deenvolvimento/execução de um app/sw.

### Principais Linguagens de Programação

* HTML
* CSS
* JavaScript (jQuery, AJAX, diversas libs)
* PHP
* .NET
* ASP
* JAVA
* Ruby (on Rails)
* Python
* Perl
* C / C++ / C#