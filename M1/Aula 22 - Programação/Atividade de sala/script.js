let nome = prompt("Digite seu nome:");

while (nome.length < 3 || !/^[a-zA-Z]+$/.test(nome)) {
    nome = prompt("Nome inválido! Digite um nome com pelo menos 3 letras (apenas letras):");
}

alert(`Olá, ${nome}! Seja bem-vindo(a)!`);