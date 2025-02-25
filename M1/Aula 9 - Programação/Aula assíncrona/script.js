let numeroSecreto = 57;
let acertou = false;

while (!acertou) {
    let chute = parseInt(prompt("Digite um número:"));

    if (chute == numeroSecreto) {
        acertou = true;
        console.log("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    } else if (chute > numeroSecreto) {
        console.log("O número é menor que " + chute + ". Tente novamente!");
    } else {
        console.log("O número é maior que " + chute + ". Tente novamente!");
    }
}