// If/else - exemplo 1

    // 1° forma
    function numeroPositivo1(num) {
            let resultado;

            if(num < 0) {    //CONDIÇÃO
                resultado = false;   //DECLARAÇÃO 1
            } else {
                resultado = true;  //DECLARAÇÃO 2
            }
            
            return resultado;
        }

        console.log(numeroPositivo1(2))
        // true

        console.log(numeroPositivo1(-9))
        //false

    // 2° forma
    function numeroPositivo2(num) {
        let resultado;

        const ehNegativo = num < 0;

        if(ehNegativo) {
            return false;
        } else {
            return true;
        }

        return resultado;
    }

    console.log(numeroPositivo2(-9))
    console.log(numeroPositivo2(3))

    //3° forma
    function numeroPositivo3(num) {
        const ehNegativo = num < 0;

        if(ehNegativo) {
            return false;
        }

        return true
    }

    console.log(numeroPositivo3(19))
    console.log(numeroPositivo3(-83))

// If/else - exemplo 2
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

    console.log(numeroPositivo4(-2))

// Switch/case
    function getAnimal(id) {
        switch(id) {
            case 1:
                return "cão"
            case 2:
                return "gato"
            case 3:
                return "pássaro"
            default:
                return "id inválida"
        }
    }

    console.log(getAnimal(1))