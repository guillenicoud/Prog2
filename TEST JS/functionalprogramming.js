// // FUNCTIONAL PROGRAMMING

// // Las funciones de Alto Orden son funciones que toman como parametro otras funciones


// // Funciones de Orden Superior

// // Composicion: Permite tomar una funcion y pasarla como parametro a otra funcion de Ordern Superior

// // En Javascript se puede asignar a una variable una funcion anónima. Para asi reutilizarla. 

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
]

// FILTER: Es un metodo de un array, que toma otra funcion como argumento, y usa esa funcion para filtrar el arra

// for (let i = 0; i < animals.length; i ++){
//     if ( animals[i].species === 'dog' ){
//         dogs.push(animals[i]);
//     }
// }
// console.log(dogs);

let dogs = animals.filter(function(animal){
    return animal.species === 'dog';
})

console.log(dogs);

// // MAP: Es un metodo de  un array, que también toma una función como argumento pero a diferencia de filter, éste modifica el array

// let names = animals.map(function(animal){
//     return animal.name + ' is a ' + animal.species; 
// })

// console.log(names);

// REDUCE

const orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

// let totalAmount = 0;

// for (let i = 0; i < orders.length; i ++) {
//     totalAmount = totalAmount + orders[i].amount;
// }

var totalAmount = orders.reduce(function (sum, order) {
    return sum + order.amount
}, 0)

console.log('TOTAL:', totalAmount);

