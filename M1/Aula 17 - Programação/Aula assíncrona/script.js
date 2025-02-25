function pedirIdade() {
    let idade;

    do {
        idade = prompt("Digite a idade da árvore:");
        idade = parseFloat(idade);

        if (isNaN(idade)) {
            alert("Por favor, insira um valor numérico válido!");
        }
    } while (isNaN(idade));

    verificarFaseDaArvore(idade);
}

function verificarFaseDaArvore(idade) {
    if (idade < 10) {
        alert("Esta árvore ainda é uma criança.");
    } else if (idade >= 10 && idade < 50) {
        alert("Esta árvore está em sua fase adulta.");
    } else {
        alert("Esta árvore é uma idosa sábia.");
    }
}

pedirIdade();