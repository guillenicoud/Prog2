function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarNombre('1111111111lkjdkladj11111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre('99999') === 'El campo nombre solo acepta letras',
        'Validar nombre no valido que el nombre solo tenga letras',
    );
}

function probarValidarCiudad () {
    console.assert(
        validarCiudad('') === 'No ha seleccionado ninguna ciudad',
        'Validar ciudad no validó que una ciudad sea seleccionada'
    );
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad no valido una ciudad correcta'
    )
}

function probarValidarDescripcion () {
    console.assert(
        validarDescripcion('a') === 'El campo descripción debe tener mas de 2 caracteres',
        'Validar descripción no valido que el campo sea menor a 2 caracteres'
    );
    console.assert(
        validarDescripcion('Lkfjdlkfjdflksdjf3a2sd1as32d1as321das32d1as32132d1a32d1as1a23d1ad1a31d1a1d1as3d3333333euwrioew00000006156') === 'El campo descripción no debe superar los 100 caracteres',
        'Validar descripcion no valido que el campo descripcion no puede superar los 100 caracteres'
    );
    console.assert(
        validarDescripcion('Regalo') === '',
        'Validar descripcion no valido una descripcion valida'
    );
    console.assert(
        validarDescripcion(',.,.,.') === 'El campo descripcion solo debe contener numeros y letras',
        'Validar descripcion no validó que solo sean números y letras'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();
