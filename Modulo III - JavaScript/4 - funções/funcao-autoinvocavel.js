(
    function() {
        let name = "Digital Innovation One"
        console.log(name);
    }
)();

(
    function(a, b) {
        console.log(a + b);
    }
)(1, 2); 

const soma3 = (
    function(a, b) {
        return a + b;
    }
)(1, 3);

console.log(soma3);