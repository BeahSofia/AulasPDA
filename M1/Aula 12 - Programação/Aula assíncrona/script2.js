const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma saudação (Oi!!, Olá!, Bom dia!, Como está?): ", (saudacao) => {
    let resposta;
    if (saudacao === "Oi!!") {
        resposta = "Oi";
    } else if (saudacao === "Olá!") {
        resposta = "Oii";
    } else if (saudacao === "Bom dia!") {
        resposta = "Bom dia";
    } else if (saudacao === "Como está?") {
        resposta = "Bem e você?";
    } else {
        resposta = "Desculpe, não entendi...";
    }

    console.log(resposta);

    rl.close();
});