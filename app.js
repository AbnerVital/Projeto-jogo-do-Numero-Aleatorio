// Gera um número aleatório para ser o número secreto no início do jogo
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1; // Inicializa o contador de tentativas

// Função para exibir um texto dentro de um elemento HTML com base na tag passada
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; // Substitui o conteúdo do elemento pela mensagem desejada
}

// Função que exibe a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// Exibe a mensagem inicial quando o jogo começa
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value; // Captura o valor digitado no input

    // Verifica se o chute é igual ao número secreto
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!'); // Atualiza o título indicando que o jogador acertou
        
        // Define a palavra correta para "tentativa(s)", ajustando singular/plural
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas); // Exibe a mensagem de acerto
        
        // Habilita o botão de reiniciar, permitindo um novo jogo
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // Se o chute for maior que o número secreto, informa ao usuário
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else { // Se for menor, informa que o número secreto é maior
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; // Incrementa o número de tentativas
        limparCampo(); // Limpa o input para um novo chute
    }
}

// Função que gera um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// Função para limpar o campo de input após cada tentativa
function limparCampo() {
    let chute = document.querySelector('input'); // Captura o campo de input
    chute.value = ''; // Limpa o valor do input
}

// Função que reinicia o jogo ao clicar no botão de "Reiniciar"
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparCampo(); // Limpa o campo de input
    tentativas = 1; // Reseta o contador de tentativas
    exibirMensagemInicial(); // Reexibe a mensagem inicial do jogo
    
    // Desabilita o botão de reinício até que o usuário acerte novamente
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
