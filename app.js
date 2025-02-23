const listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibirResultado(sorteado);
}

function exibirResultado(nome) {
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${nome}`;
    resultadoUl.appendChild(li);
}
