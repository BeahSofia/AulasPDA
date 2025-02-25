let texto = "JavaScript é incrível!";

let textoMaiusculo = texto.toUpperCase();

let textoMinusculo = texto.toLowerCase();

let textoSubstituido = texto.replace("incrível", "fantástico");

let textoCortado = texto.slice(0, 10);

document.write(`Texto original: ${texto}<br>`);
document.write(`Texto em maiúsculas: ${textoMaiusculo}<br>`);
document.write(`Texto em minúsculas: ${textoMinusculo}<br>`);
document.write(`Texto com substituição: ${textoSubstituido}<br>`);
document.write(`Texto cortado: ${textoCortado}<br>`);