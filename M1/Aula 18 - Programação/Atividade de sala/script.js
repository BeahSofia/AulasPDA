function exibirNome(nomeCompleto) {
    let totalCaracteres = nomeCompleto.length;

    let textoExibicao = `${nomeCompleto} = ${totalCaracteres}`;

    document.getElementById("resultado").textContent = textoExibicao;
}

let nome = "Marian Croak";
exibirNome(nome);