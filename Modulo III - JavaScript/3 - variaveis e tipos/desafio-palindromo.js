
//solução I
function verificarPalindromo(string) {
    
    if(!string) return "não é string";
    
    return string.split("").reverse().join("") === string;
    
    
}

console.log(verificarPalindromo("ovo")); 


//solução II
function verificarPalindromo2(string) {
    if(!string) return "não é string";

    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo2("abba"))