let animais = ["Cachorro", "Gato", "Pássaro", "Peixe"];

console.log("Array inicial:", animais);

animais.push("Coelho");
console.log("Após push('Coelho'):", animais);
console.log("Novo tamanho do array:", animais.length);

let ultimoAnimalRemovido = animais.pop();
console.log("Animal removido:", ultimoAnimalRemovido);
console.log("Array após pop():", animais);
console.log("Novo tamanho do array:", animais.length);

animais.unshift("Tartaruga");
console.log("Após unshift('Tartaruga'):", animais);
console.log("Novo tamanho do array:", animais.length);

let primeiroAnimalRemovido = animais.shift();
console.log("Animal removido:", primeiroAnimalRemovido);
console.log("Array após shift():", animais);
console.log("Novo tamanho do array:", animais.length);

let animaisString = animais.join(", ");
console.log("String com nomes dos animais:", animaisString);