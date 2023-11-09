//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function agregarInputs() {
    // Creo los Elementos
    let $nuevoLi = document.createElement("li");

    let $nuevoInput = document.createElement("input");
    $nuevoInput.id = "numero";
    $nuevoInput.setAttribute("type", "number");
    $nuevoInput.setAttribute("required", "");

    // Subo el Li
    let $lista = document.getElementById("lista");
    $nuevoLi.appendChild($nuevoInput);
    $lista.appendChild($nuevoLi);
}

function convertirArray() { // Funcion que convierte los numeros en un array
    const $numeros = document.querySelectorAll("#numero");
    let suma = 0; // Variable que va a almacenar la suma de los Valores
    let arr = []; // Array que va a contener los numeros ingresados
    for (let i = 0; i < $numeros.length; i++) {
        arr.push(Number($numeros[i].value));
    }
    return arr;
}

function obtenerPromedio(arr) {
    let suma = 0; // Variable que va a almacenar la suma de los Valores
    for (let i = 0; i < arr.length; i++) {
        suma = suma + Number(arr[i]);
    }
    let promedio = suma / arr.length; // Calcula el promedio de los numeros 
    let $promedio = document.getElementById("em-promedio");
    $promedio.innerText = "El Promedio es de : " + promedio.toString();
}

function obtenerMenor(arr) {
    let aux = Number(arr[0]); // Declaro una variable auxiliar que va a comparar los numeros y le asigno el primer digito del array
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < aux) {
            aux = arr[i];
        }
    }
    console.log("El Menor es: ", aux);
    let $menor = document.getElementById("em-menor");
    $menor.innerText = "El mayor es: " + aux.toString();
}

function obtenerMayor(arr) {
    let aux = Number(arr[0]); // Declaro una variable auxiliar que va a comparar los numeros y le asigno el primer digito del array
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > aux) {
            aux = arr[i];
        }
    }
    let $mayor = document.getElementById("em-mayor");
    $mayor.innerText = "El mayor es: " + aux.toString();
}

function obtenerFrecuente(arr) {
    let contador = 0;
    let masFrecuente;
    let frecuencia = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                contador = contador + 1;
                var num = arr[j];
            }
        }
        if (contador > frecuencia) {
            frecuencia = contador;
            masFrecuente = num;
        }
        contador = 0;
    }
    let $masFrecuente = document.getElementById("em-frecuente");
    if ( frecuencia == 1 ) {
        $masFrecuente.innerText = "No hay numero frecuente: ";
    }
    else{
        $masFrecuente.innerText = "El mas Frecuente es: " + masFrecuente.toString();
    }
       
}

function calcularValores() {
    let arreglo = convertirArray();

    console.log(arreglo);
    obtenerPromedio(arreglo);
    obtenerMenor(arreglo);
    obtenerMayor(arreglo);
    obtenerFrecuente(arreglo);
}

let $btnAgregar = document.getElementById("btn-agregar");
$btnAgregar.addEventListener("click", agregarInputs);

let $btnCalcular = document.getElementById("btn-calcular");
$btnCalcular.addEventListener("click", calcularValores);