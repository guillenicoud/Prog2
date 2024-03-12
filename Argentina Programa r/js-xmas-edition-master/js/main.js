// * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
// * Escribir pruebas para esas funciones.
// *
// * Adicional: Escribir pruebas para las funciones de tareas anteriores.


function validarNombre(nombre) {
    if ( nombre.length === 0 ) {
        // console.log('Este campo debe tener al menos 1 caracter');
        return 'Este campo debe tener al menos 1 caracter';
    }    
    if ( nombre.length > 50 ) {
        return 'Este campo debe tener menos de 50 caracteres';      
    }
    if ( !/^[a-z]+$/i.test(nombre) ) {
        // console.log('El nombre solo acepta letras');
        return 'El campo nombre solo acepta letras';
    }   
    return '';
}

function validarCiudad (ciudad) {
    if ( ciudad.length === 0 ) {
        // console.log('No ha seleccionado ninguna ciudad');
        return 'No ha seleccionado ninguna ciudad';
    }
    return '';
}

function validarDescripcion (descripcion) {
    if ( descripcion.length < 2 ) {
        return 'El campo descripción debe tener mas de 2 caracteres';    
    }
    if ( descripcion.length >= 100 ) {
        return 'El campo descripción no debe superar los 100 caracteres';
    }
    if ( !/^[a-z0-9]+$/i.test(descripcion)) {
        return 'El campo descripcion solo debe contener numeros y letras';
    }
    return '';
}

function validarFormulario(event) {

    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcion(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo' : errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(cambiarPagina, 2000);
    }
    event.preventDefault();
}

function cambiarPagina () { // Redireccion de página
    // var urlActual = window.location.href;
    window.location.href = './wishlist.html';
}

function borrarLista () {
    const $errores = document.querySelector('#errores');
    // Obtener todos los elementos <li> dentro de #errores
    const $erroresLi = $errores.querySelectorAll('li');
    // Iterar sobre los elementos <li> y eliminarlos uno por uno
    $erroresLi.forEach(function (li) {
        $errores.removeChild(li);
    });
}

function manejarErrores (errores) {
    borrarLista();
    const keys = Object.keys(errores); // Convierto el objeto en un array.
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key) {       // Recorro el array keys con el método forEach, y asigno a cada valor del array cada propiedad del objeto.
        const error = errores[key];    // A la variable error le asigno cada valor el array.
        if (error) {
            cantidadErrores = cantidadErrores + 1;
            $form[key].className = "error";         
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }
        else {
            $form[key].className = "";
        }
    });

    return cantidadErrores;
}  

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
