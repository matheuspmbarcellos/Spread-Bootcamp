const alunos = [
    {
        nome: 'Joao',
        nota: 7,
        turma: '2A',
    },
    {
        nome: 'maria',
        nota: 4,
        turma: '2B',
    },
    {
        nome: 'Matheus',
        nota: 8,
        turma: '1A',
    },
    {
        nome: 'marianna',
        nota: 10,
        turma: '1B',
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i] //Object Destructuring

        if(nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 7))