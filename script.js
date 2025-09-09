// Função para carregar os dados armazenados
function carregarDados() {
    let pontos = localStorage.getItem("pontos");
    if (pontos === null) {
        pontos = 0;
    }
    document.getElementById("pontuacao").textContent = pontos;
}

// Função para adicionar pontos ao usuário
function adicionarPontos(pontosAdicionados) {
    let pontos = parseInt(localStorage.getItem("pontos") || 0);
    pontos += pontosAdicionados;
    localStorage.setItem("pontos", pontos);
    carregarDados(); // Atualiza a exibição dos pontos
    alert(`Você ganhou ${pontosAdicionados} pontos!`);
}

// Função para registrar a coleta de lixo e adicionar pontos
function registrarColeta() {
    const quantidadeLixo = parseInt(document.getElementById("quantidade-lixo").value);
    
    if (isNaN(quantidadeLixo) || quantidadeLixo <= 0) {
        alert("Por favor, insira uma quantidade válida de lixo!");
        return;
    }

    const pontosGanhos = quantidadeLixo * 1; // Exemplo: 1 ponto por saco de lixo
    adicionarPontos(pontosGanhos);
}

// Função para enviar formulário de contato (não envia de verdade, mas mostra um alerta)
function enviarFormulario(event) {
    event.preventDefault(); // Evita o envio real do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    document.getElementById("form-contato").reset();
}

// Função para trocar pontos por benefícios
function trocarPontos() {
    let pontos = parseInt(localStorage.getItem("pontos") || 0);
    let troca = "";

    if (pontos >= 100) {
        troca = "Você trocou 100 pontos por uma cesta básica!";
        pontos -= 100; // Deduz os pontos
    } else if (pontos >= 50) {
        troca = "Você trocou 50 pontos por 10% de desconto em alimentos!";
        pontos -= 50;
    } else if (pontos >= 200) {
        troca = "Você trocou 200 pontos por um voucher de produtos ecológicos!";
        pontos -= 200;
    } else {
        troca = "Você não tem pontos suficientes para trocar!";
    }

    localStorage.setItem("pontos", pontos);
    carregarDados(); // Atualiza os pontos
    alert(troca);
}

// Função para mostrar os pontos no header
window.onload = function () {
    carregarDados();

    // Registrar coleta de lixo
    document.getElementById("registrar-coleta").addEventListener("click", registrarColeta);

    // Enviar formulário de contato
    document.getElementById("form-contato").addEventListener("submit", enviarFormulario);

    // Trocar pontos
    document.getElementById("trocar-pontos").addEventListener("click", trocarPontos);
};
