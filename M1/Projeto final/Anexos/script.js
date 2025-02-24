let confeteInterval;

function reiniciarJogo() {
    alert("Reiniciando o jogo...");
    // Lógica para reiniciar o jogo
    pararConfetes();
}

function verResultados() {
    alert("Aqui estão seus resultados!");
    // Lógica para mostrar os resultados
    pararConfetes();
}

function compartilhar() {
    alert("Compartilhando com amigos...");
    // Lógica para compartilhar
    pararConfetes();
}

function gerarConfetes() {
    const confeteContainer = document.getElementById('confete-container');
    const confete = document.createElement('div');
    confete.className = 'confete explosao';
    confete.style.left = Math.random() * 100 + 'vw'; // Posição aleatória
    confete.style.backgroundColor = randomColor();
    confeteContainer.appendChild(confete);

    // Remover confete após a animação
    confete.addEventListener('animationend', () => {
        confete.remove();
    });
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function iniciarConfetes() {
    confeteInterval = setInterval(gerarConfetes, 300); // Ajuste a frequência aqui
}

function pararConfetes() {
    clearInterval(confeteInterval);
}

window.onload = () => {
    const audio = document.getElementById('parabens-audio');
    audio.play();
    iniciarConfetes();
};
