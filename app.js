// Lista para armazenar n�meros j� sorteados, evitando repeti��es
let listaDeNumerosSorteados = [];
let numeroLimite = 10; // Limite superior do n�mero secreto

// Gera um n�mero secreto aleat�rio no in�cio do jogo
let numeroSecreto = gerarNumeroAleatorio(); 

// Inicializa o contador de tentativas
let tentativas = 1; 

// Fun��o para exibir um texto dentro de um elemento HTML com base na tag passada
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento HTML pela tag (h1, p, etc.)
    campo.innerHTML = texto; // Substitui o conte�do do elemento pelo texto informado
}

// Fun��o que exibe a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do N�mero Secreto'); // Define o t�tulo do jogo
    exibirTextoNaTela('p', 'Escolha um n�mero entre 1 e 10'); // Exibe instru��es ao jogador
}

// Exibe a mensagem inicial quando o jogo come�a
exibirMensagemInicial();

// Fun��o que verifica o chute do jogador
function verificarChute(){
    let chute = document.querySelector('input').value; // Captura o valor digitado no input

    // Verifica se o chute do jogador � igual ao n�mero secreto
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!'); // Atualiza o t�tulo indicando que o jogador acertou
        
        // Define a palavra correta para "tentativa(s)", ajustando singular/plural
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voc� descobriu o n�mero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas); // Exibe a mensagem de acerto
        
        // Habilita o bot�o de reiniciar, permitindo um novo jogo
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // Se o chute for maior que o n�mero secreto, informa ao usu�rio
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O n�mero secreto � menor');
        } else { // Se for menor, informa que o n�mero secreto � maior
            exibirTextoNaTela('p', 'O n�mero secreto � maior');
        }
        tentativas++; // Incrementa o n�mero de tentativas
        limparCampo(); // Limpa o input para um novo chute
    }
}

// Fun��o que gera um n�mero aleat�rio entre 1 e 10
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Gera um n�mero entre 1 e 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Se todos os n�meros j� foram sorteados, reseta a lista
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    // Verifica se o n�mero j� foi sorteado antes
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); // Se sim, chama a fun��o novamente para evitar repeti��o
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o n�mero sorteado � lista
        console.log(listaDeNumerosSorteados); // Exibe no console a lista de n�meros j� sorteados
        return numeroEscolhido; // Retorna o n�mero gerado
    }
}

// Fun��o para limpar o campo de input ap�s cada tentativa
function limparCampo() {
    let chute = document.querySelector('input'); // Captura o campo de input
    chute.value = ''; // Limpa o valor do input
}

// Fun��o que reinicia o jogo ao clicar no bot�o "Reiniciar"
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo n�mero secreto
    limparCampo(); // Limpa o campo de input
    tentativas = 1; // Reseta o contador de tentativas
    exibirMensagemInicial(); // Reexibe a mensagem inicial do jogo
    
    // Desabilita o bot�o de rein�cio at� que o usu�rio acerte novamente
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
