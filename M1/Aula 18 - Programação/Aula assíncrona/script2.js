let comecaCom = texto.startsWith("Java");

let terminaCom = texto.endsWith("!");

let palavras = texto.split(" ");

let textoJuntado = palavras.join("-");

document.write(`Começa com "Java"? ${comecaCom}<br>`);
document.write(`Termina com "!"? ${terminaCom}<br>`);
document.write(`Palavras separadas: ${palavras}<br>`);
document.write(`Texto juntado com hífen: ${textoJuntado}<br>`);