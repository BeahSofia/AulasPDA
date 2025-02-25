let temperatura = parseFloat(prompt("Digite a temperatura do paciente:"));

let mensagem;
if (temperatura > 7.5) {
    mensagem = "Paciente com COVID!";
} else if (temperatura >= 7.0 && temperatura <= 7.5) {
    mensagem = "Paciente com suspeita de COVID.";
} else {
    mensagem = "Paciente sem COVID.";
}

alert(mensagem);