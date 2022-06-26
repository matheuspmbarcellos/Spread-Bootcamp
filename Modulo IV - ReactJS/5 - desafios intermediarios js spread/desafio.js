for ( let i = 0; i < 10; i++ ) {

    let a = 51

    if(i === 0){
    console.log(`N[${   i   }] = ${ a  }`);
    N = a
    
    } else {
        console.log(`N[${   i   }] = ${ N*2 }`);
        N = N * 2;
    }
}