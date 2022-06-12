# MYSQL

O nome XAMPP provem da abreviação de X (para qualquer dos diferentes sistemas operacionais), Apache, MySQL, PHP, Perl.

Ele atua como um servidor web livre, fácil de usar e capaz de interpretar páginas dinâmicas. Atualmente XAMPP está disponível para Microsoft Windows, GNU/Linux, Solaris, e MacOS X.

## Instalando o XAMPP no Linux

##### 1. Abra um terminal;

##### 2. Confira se o seu sistema é de 32 bits ou 64 bits, para isso, use o seguinte comando no terminal:
    uname -m

##### 3. Se você estiver usando um sistema de 32 bits, use o comando abaixo para baixar o programa. Se o link estiver desatualizado, [acesse essa página](https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/) e baixe a última versão e salve-o com o nome xampp-installer.run:

    wget https://ufpr.dl.sourceforge.net/project/xampp/XAMPP%20Linux/7.4.11/xampp-linux-7.4.11-0-installer.run -O xampp-installer.run

##### 4. Se você estiver usando um sistema de 64 bits, use o comando abaixo para baixar o programa. Se o link estiver desatualizado, [acesse essa página](https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/) e baixe a última versão e salve-o com o nome xampp-installer.run:

    wget "https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/7.4.27/xampp-linux-x64-7.4.27-2-installer.run/download" -O xampp-installer.run

##### 5. Torne o arquivo executável com o comando abaixo;

    chmod +x xampp-installer.run

##### 6. Inicie a instalação do XAMPP, com o seguinte comando;

    sudo ./xampp-installer.run

##### 7. Siga os passos do assistente de instalação.

##### 8. Se seu ambiente gráfico atual suportar e for de 32 bits, crie um lançador para o programa, executando o comando abaixo;

    echo -e '[Desktop Entry]\n Version=1.0\n Name=xampp\n Exec=gksudo /opt/lampp/manager-linux.run\n Icon=/opt/lampp/icons/world1.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/xampp.desktop

##### 9. Se seu ambiente gráfico atual suportar e for de 64 bits, crie um lançador para o programa, executando o comando abaixo;

    echo -e '[Desktop Entry]\n Version=1.0\n Name=xampp\n Exec=gksudo /opt/lampp/manager-linux-x64.run\n Icon=/opt/lampp/icons/world1.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/xampp.desktop

##### 10. Para que o atalho funcione corretamente, instale o GKSU com o comando abaixo. Se sua distribuição não é derivada do Debian, procure o programa no gerenciador de pacotes dela e instale-o;

    sudo apt-get install gksu

##### Pronto! Agora, quando quiser iniciar o programa, digite sudo /opt/lampp/manager-linux.run (32 bits) ou sudo /opt/lampp/manager-linux-x64.run (64 bits) ou em um terminal, seguido da tecla TAB.

##### Já se a sua distribuição suportar, coloque o atalho na sua área de trabalho usando o gerenciador de arquivos do sistema ou o comando abaixo, e use-o para iniciar o programa.

    sudo chmod +x /usr/share/applications/xampp.desktop


    cp /usr/share/applications/xampp.desktop  ~/Área\ de\ Trabalho/

#### Administrando, verificando e desinstalando o XAMPP

##### Para Administrar, verificar e desinstalar o XAMPP no Linux, faça o seguinte:

##### 1. Abra um terminal;
##### 2. Se você quiser iniciar o XAMPP através do terminal, use este comando:
    sudo /opt/lampp/lampp start

##### 3. Ou simplesmente use a interface gráfica do programa para iniciar ou parar o servidor web. Para executá-la, use os atalhos criados, ou simplesmente digite o comando, em sistemas de 32 bits:
    sudo /opt/lampp/manager-linux.run    
##### ou, em sistemas de 64 bits:
     sudo /opt/lampp/manager-linux-x64.run

##### 4. Para verificar se o servidor web está sendo executado, digite o seguinte endereço em um navegador:
    http://localhost

#### Para parar todos os serviços do xampp, use o seguinte comando no terminal.
    sudo /opt/lampp/xampp stop