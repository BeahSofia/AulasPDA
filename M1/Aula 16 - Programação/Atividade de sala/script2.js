function soma() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));

    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos!");
        return;
    }

    let total = numero1 + numero2;
    alert(`O total da soma é: ${total}`);
}

soma();