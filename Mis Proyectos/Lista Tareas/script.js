function agregarLi() {
    if ( textBox.value !== "") {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = textBox.value;
        miLista.appendChild(nuevoLi);
        textBox.value = "";

    }    
}

function eliminarLi() {
    let elementoClicado = event.target; // Elemento que recibió el doble clic
    if (elementoClicado.tagName === "LI") {
        miLista.removeChild(elementoClicado);
    }
}

function tacharLi(){
    let elementoClicado = event.target;
    if (elementoClicado.tagName === "LI") {
        if ( elementoClicado.style.textDecoration != "line-through" ){
            elementoClicado.style.textDecoration = "line-through";
        }
        else {
            elementoClicado.style.textDecoration = "none";
        }
    }
}

// Obtener referencia a la lista
let miLista = document.getElementById("lista");

// Obtener referencia al botón
let botonAgregar = document.getElementById("btnAgregar");

// Obtener referencia a la caja de texto
let textBox = document.getElementById("entrada");

botonAgregar.addEventListener("click", agregarLi);
miLista.addEventListener("dblclick", eliminarLi);
miLista.addEventListener("click", tacharLi);

