//utilizando this
/*
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis (arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
} 

const nums = [1, 2];

console.log('this => maca', mapComThis(nums, maca));

console.log('this => laranja', mapComThis(nums, laranja));
*/

//funcao sem this
/*
function mapSemThis(arr) {
    arr.map(function(item){
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];
console.log(mapSemThis(nums));

console.log(nums);
*/

//filtrar

/*
function filtrador(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}


const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(filtrador(nums));
*/


/*
function meuArray(arr) {
    return arr.map(callback);
}

function callback(itemArr) {
    return itemArr + 1;
}

console.log(meuArray([1, 2, 3]));
*/

//Some todos os números de um array
//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
//Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
/*
function somaNumeros(arr) {
    return arr.reduce(reduc)
}

function reduc(prev, current) {
    return prev + current;
}

const arr = [1, 3]

console.log(somaNumeros(arr));
*/

//meu
/*
const listaCompras = {
    Banana: 14,
    Maca: 10,
    saldoDisponivel: 30,
};

function valorFinal(precos) {
    precos.map(callback)
}

function callback(item) {
    for ([value] of item) {
        valorT = value + value;
    }
    return valorT;
}

console.log(valorFinal(listaCompras))
*/

/*
const lista = [{
    nome: 'sabao em po',
    preco: 30
},
{
    name: 'cereal',
    preco: 12
},
{
    name: 'toalha',
    preco: 30
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel)
}
console.log(calculaSaldo(saldoDisponivel, lista));
*/

let array = [1, 2, 3, 4];

array.filter((item) => item % 2 === 0);