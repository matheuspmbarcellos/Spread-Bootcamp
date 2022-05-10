var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

function increment() {
    if (currentNumber >= 10) {
        alert("nao pode numero maior que 10")
    } else{
    currentNumber +=1
    currentNumberWrapper.innerHTML = currentNumber
    }
}

function decrement() {
    
    if (currentNumber <= 0) {
        alert("nao pode numero negativo")
    } else{
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
    }
}