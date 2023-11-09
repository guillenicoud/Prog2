


arr = [1, 2, 3, 7, 7, 8, 9, 10, 22, 10, 30, 7, 7];

let contador = 0;
let masFrecuente;
let frecuencia = 0;
for (let i = 0; i < arr.length; i++) {

    for ( let j = 0; j < arr.length; j++) {
        if ( arr[j] === arr[i]) {
            contador = contador + 1;
            var numero = arr[j];
        }
    }
    if ( contador > frecuencia ) { 
        frecuencia = contador;
        masFrecuente = numero;
    }
    contador = 0;
}

console.log(masFrecuente);