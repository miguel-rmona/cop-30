// Função para calcular os pontos de reciclagem
function calcularPontos() {
    let lixo = document.getElementById('lixo').value;
    let pontos = lixo * 10;  // Exemplo: 10 pontos por kg de lixo reciclado

    if (lixo > 0) {
        document.getElementById('pontuacao').innerHTML = `Você ganhou ${pontos} pontos!`;
    } else {
        document.getElementById('pontuacao').innerHTML = "Por favor, insira uma quantidade válida.";
    }
}
