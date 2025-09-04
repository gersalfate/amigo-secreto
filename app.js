let amigo = '';
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, ingrese un nombre válido.');
    } else {
        amigos.push(amigo);
        document.querySelector('#amigo').value = '';
    }
    actualizarLista();
    return;
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No hay amigos para sortear.');
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;

    }
    return;
}
