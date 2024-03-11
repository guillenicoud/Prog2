// // La variable global

// // freeCodeCamp Functional Programming
// const watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];
  
//   // let sum = 0;
//   // let cont = 0;
//   // for (let i = 0; i < watchList.length; i++){
//   //   if (watchList[i].Director === 'Christopher Nolan'){
//   //       cont++;
//   //       sum = sum + parseFloat(watchList[i].imdbRating);
//   //   }
//   // }
//   // console.log(sum = sum / cont);

//   function getRating(watchList) {
//     // Cambia solo el código debajo de esta línea
//     let filteredMovies = watchList.filter(function(movie){
//       return movie.Director === 'Christopher Nolan' && parseFloat(movie.imdbRating) > 8.0 ;
//     });

//     let sumOfRating = filteredMovies.reduce(function(sum, movie){
//       return sum + parseFloat(movie.imdbRating);
//     },0)

//     let averageRating = sumOfRating / filteredMovies.length;

//   return averageRating

//   }

//   console.log(getRating(watchList));

//   // let array = [];

//   // for (let i = 0; i < watchList.length; i ++){
//   //   if ( parseFloat(watchList[i].imdbRating) > 8.0) {
//   //     array.push({title: watchList[i].Title, rating: parseFloat(watchList[i].imdbRating)});
//   //   } 
//   // }

//   // console.log(array);

// const squareList = arr => {
//   let enteros = arr.filter(function(num){
//     return num > 0 && num % 1 == 0;
//   })
//   let cuadrados = enteros.map(function(num){
//     return num * num;
//   })

//   return cuadrados;
// };

// const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
// console.log(squaredIntegers);


// let newA = []; // NUEVO ARRAY PARA ALMACENAR LOS VALORES ELEVADOS AL CUADRADO
// let square = 0; // VARIABLE AUXILIAR DONDE SE ALOJAN LOS VALORES ELEVADOS
// for (let i = 0; i < array.length; i ++){
//   if (array[i] > 0 && array[i] % 1 === 0 ){ // Compruebo si los valores son enteros mayores a 0
//     square = array[i] * array[i];
//     newA.push(square);
//   }
// }

// console.log(newA);

// ARRAY SORT

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Cambia solo el código debajo de esta línea
//   let arr2 = arr.slice();
//   console.log(arr2);
//   return arr2.sort((a,b)=> a - b);
// }

// console.log(nonMutatingSort(globalArray));

// STRING SPLIT

// const str = "Hello World";
// const bySpace = str.split(" ");

// const otherString = "How9are7you2today";
// const byDigits = otherString.split(/\d/);


// function splitify(str) {
//   // Only change code below this line
//   return  str.split(/\W/);
//   // Only change code above this line
// }

// console.log(splitify("Hello World,I-am code"));

// STR JOIN

// const arr = ["Hello", "World"];
// const str = arr.join(" ");

// console.log(str);

// function sentensify(str) {
//   // Cambia solo el código debajo de esta línea
//   let arr = str.split(/[.-,]/);
//   str = arr.join(" ");
//   return str;
//   // Cambia solo el código encima de esta línea
// }

// console.log(sentensify("May-the-force-be-with-you"));

// Aplicar programación funcional para convertir cadenas a slugs de URL

// Cambia solo el código debajo de esta línea

// function urlSlug(title) {
//     title = title.toLowerCase();
//     let a = title.split(" ");
//     const arr = a.filter(function(element){
//       return element !== '';
//     });
//     let cad = arr.join('-');
//   return cad;
// }

// // Cambia solo el código encima de esta línea
// console.log(urlSlug(" Winter Is  Coming"));

// Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio

// function checkPositive(arr) {
//   // Cambia solo el código debajo de esta línea
//   let a = arr.every(function(num){
//     return num > 0;
//   })
//   return a;
//   // Cambia solo el código encima de esta línea
// }

// checkPositive([1, 2, 3, -4, 5]);

// Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio

// function checkPositive(arr) {
//   // Cambia solo el código debajo de esta línea
  
//   return arr.some((element => 
//     element > 0)
//   )
//   return a;
//   // Cambia solo el código encima de esta línea
// }

// console.log(checkPositive([-1, -2, -3, -4, -5]));

// // Introducción a la currificación y a la aplicación de funciones parciales ARIDAD

// function add(x) {
//   // Cambia solo el código debajo de esta línea
//   return function(y){
//     return function(z){
//       return x + y + z
//     }
//   }
// }

// console.log(add(10)(20)(30));

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  console.log(upperBound);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    console.log(multiple);
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1,5]));