let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media > 8) {
    console.log("Média: " + media.toFixed(2) + " - Parabéns pelo empenho!");
} else if (media >= 6 && media <= 8) {
    console.log("Média: " + media.toFixed(2) + " - Boa, chegou lá!");
} else {
    console.log("Média: " + media.toFixed(2) + " - Infelizmente foi reprovado!");
}