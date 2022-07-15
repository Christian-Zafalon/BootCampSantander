"use strict";
// DESAFIO 1 Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee: {code:number, name:string} =
{
    code: 10,
    name: 'Error'
};
*/
// DESAFIO 2 Como podemos melhorar o esse código usando TS? 
/*
enum Profissao {
    Artista,
    Desenvolvedor,
    Medico,
    Padeiro
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}
*/
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
