function cumprimentarUsuario() {
    let nome = prompt("Por favor, digite seu nome:");

    if (nome) {
        alert(`Olá, ${nome}!`);
    } else {
        alert("Olá, visitante!");
    }
}

cumprimentarUsuario();