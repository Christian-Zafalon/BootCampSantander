/*
let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNums(num1: number, num2: number) {
    return num1 + num2;
}

button?.addEventListener('click', () =>
console.log(somarNums(Number(input1.value), Number(input2.value)))
);
//
//
/*
button?.addEventListener('click', () => {
    if (input1 && input2) {
        console.log(somarNums(Number(input1.value), Number(input2.value)));
    }
})*/

const conheceChris: boolean = true;
const idadeChris: number = 20;

function aniversario(conheceChris: boolean, idadeChris: number) {
    if (conheceChris === true && idadeChris === 20){
        return ('Você está convidado caraii, Zanuts na sexta-feira as 7hr')
    }else{
        return ('Vix man, nao foi dessa vez.')
    }
}

console.log(aniversario(true, 20));