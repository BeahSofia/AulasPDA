const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroSecreto = 42;
let acertou = false;

function perguntarChute() {
    rl.question("Digite um número: ", (chute) => {
        chute = parseInt(chute);

        if (chute == numeroSecreto) {
            acertou = true;
            console.log("Parabéns! Você acertou o número secreto: " + numeroSecreto);
            rl.close();
        } else if (chute > numeroSecreto) {
            console.log("O número é menor que " + chute + ". Tente novamente!");
            perguntarChute();
        } else {
            console.log("O número é maior que " + chute + ". Tente novamente!");
            perguntarChute();
        }
    });
}

perguntarChute();