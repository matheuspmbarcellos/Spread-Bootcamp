// If/else

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