let fala1 = "Não sou eu!!";
let fala2 = "Eu tentei te ajudar desde o início!!";
let fala3 = "Já pensou que o monstro pode ser controlado?";

let tamanhoFala1 = fala1.length;
let tamanhoFala2 = fala2.length;
let tamanhoFala3 = fala3.length;

let maiorFala = Math.max(tamanhoFala1, tamanhoFala2, tamanhoFala3);

if (maiorFala == tamanhoFala1) {
    console.log("Suspeito 1 é o culpado!");
} else if (maiorFala == tamanhoFala2) {
    console.log("Suspeito 2 é o culpado!");
} else {
    console.log("Suspeito 3 é o culpado!");
}