let saudacao = prompt("Digite uma saudação (Oi!!, Olá!, Bom dia!, Como está?):");

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

alert(resposta);