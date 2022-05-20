const lista = [
    {
        name: 'sabao em pó',
        preco: 30
    },
    {
        name:'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponível = 100;

function calculaSaldo(saldoDisponível, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({ prev });
        console.log({ current })
        return prev - current.preco;
    }, saldoDisponível)
}

console.log('Saldo final: ', calculaSaldo(saldoDisponível, lista))