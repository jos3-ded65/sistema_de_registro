// Creación del arreglo de listados de amigos
let amigos = [];

// Selectores de la app
const inputAmigos = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const listaResultados = document.getElementById("resultado");

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigos.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else {
        alert("Este nombre ya ha sido agregado.");
    }
    
    inputAmigos.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para verificar si hay amigos en el arreglo
function verificarArrayAmigos() {
    return amigos.length > 0;
}

// Función para sortear un amigo
function sortearAmigo() {
    // Limpiar las listas antes de mostrar los resultados
    listaResultados.innerHTML = "";

    if (!verificarArrayAmigos()) {
        alert("No hay amigos para sortear!");
        return;
    }
    
    let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAmigoSorteado];
    
    let li = document.createElement("li");
    li.textContent = nombreSorteado;
    listaResultados.appendChild(li);
    
    amigos.splice(indiceAmigoSorteado, 1);
    actualizarLista();
}
