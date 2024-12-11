interface Pessoa {      //objeto com as propriedades 
    nome: string,
    idade: number,
    profissao? : string     // a ? deixa nossa propriedade opcional
}

const pessoa : Pessoa = {       //constantes usando o objeto
    nome: 'Fabio',
    idade: 29
}

const pessoa2 : Pessoa = {
    nome: 'João',
    idade: 25,
    profissao: 'Desenvolvedor'
}

//Para declaração de array temos duas maneiras

const arrayPessoa: Pessoa[] = [
    pessoa,
    pessoa2
]

const arrayPessoa2: Array<Pessoa> = [
    pessoa,
    pessoa2
]

const arrayNum: number[] = [ 
    1, 2, 3
]

const arrayString: Array<string> = [
    'um', 'dois', 'três'
]