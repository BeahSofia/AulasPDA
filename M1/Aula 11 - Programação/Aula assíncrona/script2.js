const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a temperatura do paciente: ", (temperatura) => {
    temperatura = parseFloat(temperatura);

    let mensagem;
    if (temperatura > 7.5) {
        mensagem = "Paciente com COVID!";
    } else if (temperatura >= 7.0 && temperatura <= 7.5) {
        mensagem = "Paciente com suspeita de COVID.";
    } else {
        mensagem = "Paciente sem COVID.";
    }

    console.log(mensagem);

    rl.close();
});