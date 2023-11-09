/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function agregarInputs() {
    const integrantes = document.querySelector("#cantidad").value;
    if (integrantes > 0) {
        for (let i = 1; i <= integrantes; i++) {
            let $divIntegrantes = document.createElement("div");
            $divIntegrantes.id = "integrantes";

            let $inputEdad = document.createElement("input");
            $inputEdad.id = "edad";
            $inputEdad.type = "number";

            let $labelEdad = document.createElement("label");
            $labelEdad.innerText = "Edad Integrante # " + i.toString()

            let $formulario = document.querySelector("#formulario");
            $divIntegrantes.appendChild($labelEdad);
            $divIntegrantes.appendChild($inputEdad);
            $formulario.appendChild($divIntegrantes);
        }
        // Cambio de estados de los botones
        let $btnReset = document.querySelector("#btn-reset");
        $btnReset.style.display = "inline";
        $btnAgregarInputs.setAttribute("disabled", "");
        $btnBorrarInputs.style.display = "inline";
        $btnCalcularInputs.style.display = "inline";
    }
    else {
        alert('El numero de integrantes debe ser mayor a 0');
    }
}

function borrarInputs() {
    let $formulario = document.querySelector("#formulario");
    let $integrantes = document.querySelectorAll("#integrantes");
    let $btnReset = document.querySelector("#btn-reset");
    let $resultados = document.querySelector("#resultados");

    $btnAgregarInputs.removeAttribute("disabled", "");
    $btnReset.style.display = "none";
    $btnBorrarInputs.style.display = "none";
    $resultados.style.display = "none";
    $btnCalcularInputs.style.display = "none";
    for (let i = 0; i < $integrantes.length; i++) {
        $formulario.removeChild($integrantes[i]);
    }
}

function obtenerEdades() {
    $integrantes = document.querySelectorAll("#edad");
    edadIntegrantes = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edadIntegrantes.push(Number($integrantes[i].value));
    }
    console.log(edadIntegrantes);
    return edadIntegrantes;
}

function promedioEdad(edades) {
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < edades.length; i++) {
        suma = suma + edades[i];
    }
    promedio = suma / edades.length;
    return promedio;
}

function menorEdad(edades) {
    let menor = edades[0];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < menor) {
            menor = edades[i];
        }
    }
    return menor;
}

function mayorEdad(edades) {
    let mayor = edades[0];
    for ( let i = 0; i < edades.length; i++) {
        if (edades[i] > mayor) {
            mayor = edades[i];
        }
    }
    return mayor;
}

function mostrarResultados(promedio, mayor, menor) {
    let $resultados = document.querySelector("#resultados");
    $resultados.style.display = "block";

    let $promedio = document.querySelector("#promedio-edad");
    $promedio.innerText = promedio.toString();

    let $mayor = document.querySelector("#mayor-edad");
    $mayor.innerText = mayor.toString();

    let $menor = document.querySelector("#menor-edad");
    $menor.innerText = menor.toString();
}

function calcularEdades() {
    let edades = obtenerEdades(); // Devuelve un array de las edades de los Integrantes
    let prom = promedioEdad(edades);
    let mayor = mayorEdad(edades);
    let menor = menorEdad(edades);
    mostrarResultados(prom, mayor, menor);
}

const $btnAgregarInputs = document.querySelector("#btn-agregar");
$btnAgregarInputs.addEventListener("click", agregarInputs)

const $btnBorrarInputs = document.querySelector("#btn-borrar");
$btnBorrarInputs.addEventListener("click", borrarInputs);

const $btnCalcularInputs = document.querySelector("#btn-calcular");
$btnCalcularInputs.addEventListener("click", calcularEdades);
