function soma(num1, num2) {
    let total = num1 + num2;

    exibir(total);
}

function exibir(total) {
    alert(`O total da soma é: ${total}`);
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números válidos!");
} else {
    soma(numero1, numero2);
}