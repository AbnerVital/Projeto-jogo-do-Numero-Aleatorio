// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do N�mero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um n�mero entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do N�mero Secreto');
exibirTextoNaTela('p', 'Escolha um n�mero entre 1 e 10');


