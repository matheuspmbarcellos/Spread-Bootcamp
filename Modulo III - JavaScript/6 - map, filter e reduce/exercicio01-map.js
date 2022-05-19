const maca = {
    value: 2
}

const laranja = {
    value: 5
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3, 5];

console.log('this -> maça', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));