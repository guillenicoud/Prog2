// // function pregnombre(nombre) {
// //     if (nombre === "GUILLERMO") {
// //         return console.log(`Hola Tocayo yo tambien me llamo ${nombre}`);
// //     }
// //     else if (nombre === "JUAN") {
// //         return console.log(`Hola ${nombre} te llamas igual que mi Tio`);
// //     }
// //     else if (nombre.trim().length === 0) {
// //         return console.log("No ingresaste tu nombre");
// //     }

// function pregnombre(nombre) {
//     if (nombre === "GUILLERMO") {
//         return console.log(`Hola Tocayo yo tambien me llamo ${nombre}`);
//     }
//     else if (nombre === "JUAN") {
//         return console.log(`Hola ${nombre} te llamas igual que mi Tio`);
//     }
//     else if (nombre.trim().length === 0) {
//         return console.log("No ingresaste tu nombre");
//     }

// // }

// // let nombre = prompt("Cual es tu nombre?").trim().toUpperCase();
// // pregnombre(nombre);

// // const MI_EDAD = 32;

// // function saberedad(edad) {
// //     if ( edad > MI_EDAD){
// //         return console.log("Tienes mas años que yo");
// //     }
// //     else if (edad < MI_EDAD){
// //         return console.log("Eres menor que yo");
// //     }
// //     else {
// //         return console.log("Guau tenemos la misma edad !!!");
// //     }
// // }

// // let edad = Number(prompt("Cual es tu edad"));
// // saberedad(edad);

// let tieneDoc = prompt("Tienes documento Si/No?").toUpperCase();
// function entrada(doc) {
//     if (doc == "SI") {
//         let edad = Number(prompt("Que edad tienes?"));
//         if ( edad >= 18 ){
//             return console.log("Puedes entrar")
//         }
//         else {
//             return console.log("No puedes Entrar, lo siento");
//         }
//     }
//     else if (doc == "NO") {
//         return console.log("Sin documento no puedes entrar");
//     }
//     else {
//         return console.log("No respondes a mi pregunta");
//         entrada(doc);
//     }
// }

// entrada(tieneDoc);

// Numero aleatorio de 0 a 10;

// const contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];

// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//       if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//           return (contacts[x][prop])   ;
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }

// console.log(lookUpProfile("Kristian", "Vos"));

// function randomWholeNum() {
//     let x = Math.random();
//     return Math.floor( x * 10);
// }
// console.log("El numero es ", randomWholeNum());

// let min = 20;
// let max = 100;

// let tot = (max - min + 1) + 1;
// tot = Math.floor(Math.random() * tot);
// console.log(tot);

// function countdown(n){
//     if ( n < 1 ) {
//       return [];
//     }
//     else {
//         let arr = countdown(n - 1);
//         arr.push(n);
//         return arr;
//     }
// }

// let a = (countdown(10));
// console.log(a);

// function countup(n) {
//   if (n === 0) {
//     return;
// }
// console.log(n);
// return countup(numero - 1);
// };
// console.log(countup(5)) // 5, 4, 3, 2, 1

// const n = 10;

// function fibonacciRecursivo(n) {
//     if (n <= 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
//     }
// }

// // Ejemplo de uso
// const resultado = fibonacciRecursivo(n);
// console.log(`El número Fibonacci en la posición ${n} es ${resultado}`);

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));

// const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
// let arr2 = [];

// arr2 = [...arr1]; // Cambia esta línea

// console.log(arr1);
// console.log(arr2);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Cambia solo el código debajo de esta línea

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

// Cambia solo el código encima de esta línea

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//   // Cambia solo el código debajo de esta línea
//   const failureItems = [];
//   for ( let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//   // Cambia solo el código encima de esta línea

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList);

// Cambia solo el código debajo de esta línea
// const bicycle = {
//   gear: 2,  // Propiedad gear con valor inicial 2
//   setGear: function(newGear) {  // Método setGear para ajustar el engranaje
//     this.gear = newGear;  // Cambia el valor de gear al nuevo valor proporcionado
//   }
// };

// // Llamada al método setGear para cambiar el engranaje a 3
// bicycle.setGear(5);

// // Imprime el valor actual de la propiedad gear
// console.log(bicycle.setGear);  // Esto imprimirá

// Cambia solo el código debajo de esta línea

// class Thermostat {
//   constructor(temperature) {
//     this._temperatura = temperature;
//   }
// }

// // Cambia solo el código encima de esta línea

// const thermos = new Thermostat(76); // Ajuste en escala Farenheit
// let temp = thermos.temperature; // 24.44 en Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 en Celsius

// console.log(thermos);

// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);.

// function cambiarPagina () {
//   // var urlActual = window.location.href;
//   window.location.href = 'file:///C:/Users/Computos/Desktop/PROG/Mis-Proyectos/js-xmas-edition-master/wishlist.html';
// }

// document.querySelector('#btn-url').onclick = function (){
//   setTimeout(cambiarPagina, 2000);
// }

let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method',['deep',['deeper',['deepest']]]],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Cambia solo el código encima de esta línea
];

console.log(myNestedArray);