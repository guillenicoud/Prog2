//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function agregarClase() {
    let $nuevoDiv = document.createElement("div");
    $nuevoDiv.className = 'clase';

    let $nuevoLabel = document.createElement("label");
    $nuevoLabel.textContent = "Nueva Clase ";

    // Creacion de los campos y labels de cada clase
    let $labelHoras = document.createElement("label");
    $labelHoras.textContent = "Horas";
    let $inputHoras = document.createElement("input");
    $inputHoras.type = "number";
    $inputHoras.setAttribute("required","");
    $inputHoras.id = "horas";

    let $labelMinutos = document.createElement("label");
    $labelMinutos.textContent = "Minutos"
    let $inputMinutos = document.createElement("input");
    $inputMinutos.type = "number";
    $inputMinutos.setAttribute("required","");

    $inputMinutos.id = "minutos"

    let $labelSegundos = document.createElement("label");
    $labelSegundos.textContent = "Segundos"
    let $inputSegundos = document.createElement("input");
    $inputSegundos.type = "number";
    $inputSegundos.setAttribute("required","");
    $inputSegundos.id = "segundos"

    // Se suben todos los imputs y labels
    $nuevoDiv.appendChild($labelHoras);
    $nuevoDiv.appendChild($inputHoras);
    $nuevoDiv.appendChild($labelMinutos);
    $nuevoDiv.appendChild($inputMinutos);
    $nuevoDiv.appendChild($labelSegundos);
    $nuevoDiv.appendChild($inputSegundos);

    let $formulario = document.querySelector("#formulario");
    $formulario.appendChild($nuevoDiv);
}

    // SUMA DE SEGUNDOS
function sumarInputs() {
    console.log("#############################################################")
    let $segundos = document.querySelectorAll("#segundos");
    let segundos = 0; // Reinicio los segundos
    for ( let s = 0; s < $segundos.length; s++) {  // Recorro todas los segundos de las clases y los sumo
        segundos = segundos + Number(($segundos[s].value));
    }
    console.log("Suma de segundos ", segundos);

    if ( segundos > 60 ) { // Si la suma de segundos da mas de 60 quito los minutos y se los asigno a una variable
        var restoMin = Math.trunc(segundos / 60);
        console.log("Resto Minutos:" ,restoMin);
        segundos = segundos % 60;
        console.log("Segundos: ", segundos);
    }
    else {
        var restoMin = 0;
    }

    // SUMA DE MINUTOS
    let $minutos = document.querySelectorAll("#minutos");
    let minutos = 0;
    minutos = minutos + restoMin; // Absorbo los minutos que hice en el calculo anterior
    console.log("Minutos restantes a sumar: ", minutos);
    for ( let m = 0; m < $minutos.length; m++ ){
        minutos = minutos + Number(($minutos[m]).value);
    }
    if ( minutos > 60 ) {
        var restoHoras = Math.trunc(minutos / 60)
        console.log("Minutos a sumar a las horas", restoHoras);
        minutos = minutos % 60;
    }
    else {
        restoHoras = 0;
    }
    console.log("Total de Minutos ", minutos);

    // Suma de Horas
    let $horas = document.querySelectorAll("#horas");
    let horas = 0
    horas = horas + restoHoras;
    for ( let h = 0; h < $horas.length; h++) {
        horas = horas + Number(($horas[h]).value);
    }
    console.log("Horas ", horas);
    mostrarResultados(horas, minutos,segundos); // Llamo a la funcion y le envio todos los parámetros

}

// MUESTRA SUMA DEL RESULTADO EN STRONG

function mostrarResultados(seg, min, hor){ 
    // console.log("total", total);
    let $total = document.getElementById("resultado"); 
    $total.innerText = "Tiempo total de las clases: " + seg.toString() + ":" + min.toString() + ":" + hor.toString();
}

// Boton agregar una nueva clase
$boton = document.querySelector("#btn-agregar");
let resultado = $boton.addEventListener("click", agregarClase);

// Boton que calcula todo
$btncalcular = document.getElementById("btn-calcular");
$btncalcular.addEventListener("click", sumarInputs);


