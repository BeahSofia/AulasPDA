let numero = 10;

console.log("Números de 1 até", numero, "usando while:");
let i = 1;
while (i <= numero) {
    console.log(i);
    i++;
}

console.log("Números de", numero, "até 1 usando do...while:");
let j = numero;
do {
    console.log(j);
    j--;
} while (j >= 1);

console.log("Números pares de 0 até", numero, "usando for:");
for (let k = 0; k <= numero; k++) {
    if (k % 2 === 0) {
        console.log(k);
    }
}

function somaAte(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    return soma;
}

let resultado = somaAte(numero);
console.log("Soma de 1 até", numero, ":", resultado);