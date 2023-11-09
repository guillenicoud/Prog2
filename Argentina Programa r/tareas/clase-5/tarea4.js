//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function agregarNumero() {
    // Creo los Elementos
    let $nuevoInput = document.createElement("input");
    $nuevoInput.id = "numero";
    $nuevoInput.setAttribute("type", "number");
    let $nuevoLabel = document.createElement("label");
    $nuevoLabel.innerText = "Numero N° ";

    // $btnReset = document.createElement("button");
    // $btnReset.setAttribute("type", "reset");
    // $btnReset.innerText = "Reset";

    // Subo el formulario
    let $formulario = document.getElementById("formulario");
    $formulario.appendChild($nuevoLabel);
    $formulario.appendChild($nuevoInput);
    // $formulario.appendChild($btnReset);
}

function calcularValores () {
    console.log("############################################");   
    const $numeros = document.querySelectorAll("#numero");
    console.log("Valores ", $numeros);
    let suma = 0; // Variable que va a almacenar la suma de los Valores
    let arr = []; // Array que va a contener los numeros ingresador
    for ( let p = 0; p < $numeros.length; p++) {
        suma = suma + Number($numeros[p].value);
        console.log($numeros[p].value);
        arr.push(Number($numeros[p].value));
    }

    let promedio = suma / $numeros.length; // Calcula el promedio de los numeros 
    console.log("La suma es de: ", suma);  
    console.log("El promedio es de: ", promedio);
    console.log(arr);
    var aux = Number(arr[0]); // Declaro una variable auxiliar que va a comparar los numeros y le asigno el primer digito del array
    for ( let i = 0; i <= arr.length; i++) {
        console.log("La longitud del array es de: ", arr.length)
        if ( arr[i] > aux) {
            aux = arr[i];
        } 
        console.log("El mayor es: ", aux);  
    }
    console.log("El mayor es: ", aux);
    asignarValores(promedio);
    calcularFrecuentes($numeros);
    let a = convertirArray();
    console.log("Convertido: ", a);
}

function calcularFrecuentes(numero) {
    let arr = [];
    for (let a = 0; a < numero.length; a++ ) {
        arr.push(numero[a].value);
    }
    console.log("Array", arr);
    let contador = 0;
    let masFrecuente;
    let frecuencia = 0;
    for (let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length; j++) {
            if ( arr[j] === arr[i]) {
                contador = contador + 1;
                var num = arr[j];
            }
        }
        if ( contador > frecuencia ) { 
            frecuencia = contador;
            masFrecuente = num;
        }
        contador = 0;
    }
    console.log("El numero mas frecuente es: ", masFrecuente);
}

function asignarValores(promedio) {
    let $emPromedio = document.querySelector("#promedio");
    let $emMayor = document.querySelector("mayor");
    let $emMenor = document.querySelector("menor");
    let $emFrecuente = document.querySelector("frecuente");

    $emPromedio.innerText = $emPromedio.innerText + promedio.toString();
    // $emMayor.innerText = $emMayor.innerText + mayor.toString();
    // $emMenor.innerText = $emMenor.innerText + menor.toString();
    // $emFrecuente.innerText = $emFrecuente.innerText + frecuente.toString();
}

function convertirArray () {
    const $numeros = document.querySelectorAll("#numero");
    let arr = []; // Array que va a contener los numeros ingresados
    for ( let p = 0; p < $numeros.length; p++) {
        arr.push(Number($numeros[p].value));
    }
    return arr;
}

let $btnAgregar = document.getElementById("btn-agregar");
$btnAgregar.addEventListener("click", agregarNumero);

let $btnCalcular = document.getElementById("btn-calcular");
$btnCalcular.addEventListener("click", calcularValores);
