/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function agregarFamiliar () {
    const $divFamiliar = document.createElement("div");
    $divFamiliar.id = "familiar";

    const $labelFamiliar = document.createElement("label");
    $labelFamiliar.innerText = "Familiar"
    
    const $inputFamiliar = document.createElement("input");
    $inputFamiliar.id = "salario";
    $inputFamiliar.type = "number";
    $inputFamiliar.setAttribute("placeholder", "Ingrese Salario");

    const $formulario = document.querySelector("#formulario");
    
    // Subo los elementos creados anteriormente
    $formulario.appendChild($divFamiliar);
    $divFamiliar.appendChild($labelFamiliar);
    $divFamiliar.appendChild($inputFamiliar);

    $btnCalcular.style.display = "inline";
    $btnBorrar.style.display = "inline";
}

function obtenerSalarios () {
    const $salarios = document.querySelectorAll("#salario");
    let salarios = [];
    for (let i = 0; i < $salarios.length; i ++) {
        if ( $salarios[i].value > 0) {
            salarios.push(Number(($salarios[i].value)));
        }
    }
    console.log(salarios);
    return salarios;
}

function calcularMayor (salarios) {
    let mayor = salarios[0];
    for ( let i = 1; i < salarios.length; i++) {
        if ( salarios[i] > mayor) {
            mayor = salarios[i];
        } 
    }
    console.log("El Mayor salario anual es de: $", mayor);
    return mayor;
}

function calcularMenor (salarios) {
    let menor = salarios[0];
    for ( let i = 1; i < salarios.length; i++) {
        if (salarios[i] != 0 ) {
            if ( salarios[i] < menor) {
                menor = salarios[i];
            } 
        }    
    }    
    console.log("El Menor salario Anual es de: $", menor);
    return menor;
}

function calcularPromedioAnual (salarios) {
    let promedioAnual = 0;
    for ( let i = 0; i < salarios.length; i++) {
          promedioAnual += salarios[i];
        }  
    promedioAnual = promedioAnual / salarios.length;
    console.log("El salario promedio anual es de: $", promedioAnual);
    return promedioAnual;
}

function calcularPromedioMensual (promedioAnual) {
    let promedioMensual = promedioAnual / 12;
    return promedioMensual;
}

function calcularSalarios () {
    let salarios = obtenerSalarios();
    document.querySelector("#resultados").style.display = "block";
    document.querySelector("#mayor").textContent = calcularMayor(salarios);
    document.querySelector("#menor").textContent = calcularMenor(salarios);
    document.querySelector("#promedio-anual").textContent = calcularPromedioAnual(salarios);
    document.querySelector("#promedio-mensual").textContent = calcularPromedioMensual(calcularPromedioAnual(salarios));
    // mostrarResultados(mayor, menor, promedioanual, promediomensual);
}

function borrarInputs () {
    let $formulario = document.querySelector("#formulario");
    let $inputs  = document.querySelectorAll("#familiar");
    for ( let i = 0; i < $inputs.length; i++) {
        $formulario.removeChild($inputs[i]);
    }
    $btnBorrar.style.display = "none";
    $btnCalcular.style.display = "none";
    $resultados = document.querySelector("#resultados");
    $resultados.style.display = "none";
}

const $btnAgregar = document.querySelector("#btn-Agregar");
$btnAgregar.addEventListener("click", agregarFamiliar);

const $btnCalcular = document.querySelector("#btn-calcular");
$btnCalcular.addEventListener("click", calcularSalarios);

const $btnBorrar = document.querySelector("#btn-borrar");
$btnBorrar.addEventListener("click", borrarInputs);

