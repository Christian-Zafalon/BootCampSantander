const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: { nome: string, idade: number, profissao: string } = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoradeFutebol
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends pessoa {
    materiais: string[]
}

const vanessa: pessoa = {
    nome: 'Vanessa',
    idade: 13,
    profissao: Profissao.Desenvolvedora
}

