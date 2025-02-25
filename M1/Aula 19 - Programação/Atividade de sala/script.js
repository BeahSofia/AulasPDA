let nomes = ["Alice", "Bob", "Charlie"];

console.log("Array inicial:", nomes);

nomes.push("luna");
console.log("Após push('luna'):", nomes);

nomes.unshift("simon");
console.log("Após unshift('simon'):", nomes);

nomes.pop();
console.log("Após pop():", nomes);

nomes.pop();
console.log("Após pop():", nomes);

nomes.push("luna");
console.log("Após push('luna'):", nomes);

console.log("Resultado final:", nomes);