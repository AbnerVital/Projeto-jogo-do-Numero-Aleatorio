// Lista para armazenar números já sorteados, evitando repetições
let listaDeNumerosSorteados = [];

// Gera um número secreto aleatório no início do jogo
let numeroSecreto = gerarNumeroAleatorio(); 

// Inicializa o contador de tentativas
let tentativas = 1; 

// Função para exibir um texto dentro de um elemento HTML com base na tag passada
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento HTML pela tag
    campo.innerHTML = texto; // Substitui o conteúdo do elemento pelo texto informado
}

// Função que exibe a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto'); // Define o título do jogo
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // Exibe instruções ao jogador
}

// Exibe a mensagem inicial quando o jogo começa
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value; // Captura o valor digitado no input

    // Verifica se o chute do jogador é igual ao número secreto
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

// Função que gera um número aleatório entre 1 e 4 (por erro, deveria ser entre 1 e 10)
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 4 + 1); // Gera um número entre 1 e 4

    // Verifica se o número já foi sorteado antes
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); // Se sim, chama a função novamente para evitar repetição
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número sorteado à lista
        console.log(listaDeNumerosSorteados); // Exibe no console a lista de números já sorteados
        return numeroEscolhido; // Retorna o número gerado
    }
}

// Função para limpar o campo de input após cada tentativa
function limparCampo() {
    let chute = document.querySelector('input'); // Captura o campo de input
    chute.value = ''; // Limpa o valor do input
}

// Função que reinicia o jogo ao clicar no botão "Reiniciar"
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparCampo(); // Limpa o campo de input
    tentativas = 1; // Reseta o contador de tentativas
    exibirMensagemInicial(); // Reexibe a mensagem inicial do jogo
    
    // Desabilita o botão de reinício até que o usuário acerte novamente
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
