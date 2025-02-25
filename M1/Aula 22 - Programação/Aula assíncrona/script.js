function gerarSequencia() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));


    while (isNaN(numero) || numero <= 0) {
        numero = parseInt(prompt("Número inválido! Digite um número inteiro positivo:"));
    }

    let sequencia = [numero];
    while (numero !== 1) {
        if (numero % 2 === 0) {
            numero = numero / 2;
        } else {
            numero = numero * 3 + 1;
        }
        sequencia.push(numero);
    }

    document.getElementById("resultado").textContent = "Sequência de Collatz: " + sequencia.join(", ");
}

function gerarSequenciaAleatoria() {
    let numero = Math.floor(Math.random() * 100) + 1;

    let sequencia = [numero];
    while (numero !== 1) {
        if (numero % 2 === 0) {
            numero = numero / 2;
        } else {
            numero = numero * 3 + 1;
        }
        sequencia.push(numero);
    }

    document.getElementById("resultado").textContent = "Sequência de Collatz: " + sequencia.join(", ");
}