//loop for
/* 

function somar(array) {
    let somar = [];


    //enquanto ele for menor que o tamanho do array 
    for (let i = 0; i < array.length; i++) {
        somar.push(array[i] + 1);
    }
    return console.log(somar);
}
const meusNumeros = [1, 2, 3];

somar(meusNumeros);

*/

//for / of
/*
function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra);
    }
}

const palavra = "abacaxi";
logLetras(palavra)
*/

//WHILE
/* 
//executa enquanto o while for verdadeiro
function enquanto() {
    let num = 0
    while( num <=5){
        console.log(num);
        num++;
    }
}
enquanto();
*/

//do WHILE

/*
//executa enquanto o while for verdadeiro mas executa o DO independentemente da regra while
function enquanto() {
    let num = 6;
    do {
        console.log(num);
        num++;
    }while( num <=5)
}
enquanto();
*/

const pessoa1 = 
    {
        nome: "paulo",
        idade: 19,
    };
    const pessoa2 = 
    {
        nome: "Christian",
        idade: 19,
    };



function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 30))