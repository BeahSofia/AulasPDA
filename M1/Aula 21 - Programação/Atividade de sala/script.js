var nomes = [];

var contador = 0;
while (contador < 3) {
    var nome = prompt("Digite um nome:");
    nomes.push(nome); // Adiciona o nome ao array
    contador++;
}

document.write("<h2>Nomes digitados:</h2>");
for (var i = 0; i < nomes.length; i++) {
    document.write("<p>" + nomes[i] + "</p>");
}