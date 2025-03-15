let amigos = [];
const validString = (texto) => {
    return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto.trim());
}
const idAmigo = (index) => {
    return `amigo-${index}`
}
function agregarAmigo() {
    const valueInput = returnValue();
    if (!valueInput) return;

    amigos.push(valueInput);
    updateListaAmigos();
}

function returnValue() {
    const elemento = document.querySelector("#amigo");
    const input = elemento.value;
    
    if (!validString(input)) {
        alert("Por favor, inserte un nombre.");
        return false;
    }
    console.log({ input });
    input.value = "";
    return input;
}

function updateListaAmigos() {
    const elememto = document.querySelector("#listaAmigos");
    let contenidoElemento = "";
    let enableButton = false;
    if (amigos.length == 0) {
        contenidoElemento = `
        <span> <strong>No se han agregado amigos</strong> </span>
        `;
    } else {
        contenidoElemento = returnLiForAmigo(amigos);
        enableButton = true;
    }
    toggleSortear(enableButton);

    elememto.innerHTML = contenidoElemento;
}

function returnLiForAmigo(amigos) {
    let contenido = "";
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        contenido += `<li id=${idAmigo(index)}>${element}</li>`;
    }
    return contenido;
}

function toggleSortear(estado) {
    const boton = document.getElementById("sortear");
    if (boton) {
        boton.disabled = !estado;
    }
}

function sortearAmigo() {

    const resultado = document.getElementById("resultado");

    const tamanioAmigos = amigos.length;
    console.log({ tamanioAmigos });
    if (tamanioAmigos > 0) {

        const aleatorio = Math.floor(Math.random() * tamanioAmigos);

        const idAleatorio = idAmigo(aleatorio)

        document.querySelectorAll(".resaltado").forEach(li => li.classList.remove("resaltado"));

        let amigoSeleccionado = document.getElementById(idAleatorio);
        console.log({ amigoSeleccionado });
        if (amigoSeleccionado) {
            amigoSeleccionado.classList.add("resaltado");
        }

        const mensaje = `<span>El amigo secreto sorteado es: <strong>${amigos[aleatorio]}</strong> </span>`
        resultado.innerHTML = mensaje;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    updateListaAmigos();
});
