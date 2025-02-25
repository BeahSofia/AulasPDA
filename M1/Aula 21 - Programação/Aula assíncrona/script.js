let nomes = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa da cultura africana:`);
    nomes.push(nome);
}

for (let i = 0; i < nomes.length; i++) {
    console.log(`O nome ${nomes[i]} está na posição ${i}.`);
}

let sobrenomes = ["Maathai", "Adichie", "Mandela", "Makeba", "Annan"];
let nomesCompletos = nomes.concat(sobrenomes);

console.log("Nomes completos:", nomesCompletos);

function ordenarNomes(array) {
    return array.sort();
}

let nomesOrdenados = ordenarNomes(nomes);
console.log("Nomes ordenados:", nomesOrdenados);

function filtrarPorLetra(array, letra) {
    return array.filter(nome => nome.startsWith(letra));
}

let nomesComA = filtrarPorLetra(nomes, "A");
console.log("Nomes que começam com 'A':", nomesComA);