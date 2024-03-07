// function sumAll(arr) {
//     let sum = 0;
//     if (arr[0] < arr[1]){
//         for (let j = arr[0]; j <= arr[1]; j++){
//             sum = sum + j;
//         }
//     }
//     else{
//         for (let j = arr[0]; j >= arr[1]; j--){
//             sum = sum + j;
//         }
//     }
//     return sum;
// }

// console.log(sumAll([1, 4]));

// Diff Two Arrays
/*

function diffArray(arr1, arr2) {
  const newArr = [];
  console.log(arr1);
  console.log(arr2);

  for (let i = 0; i < arr2.length; i++) {
    let vale2 = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        vale2 = true;
        break;
      }
    }
    if (vale2 === false) {
      newArr.push(arr2[i]);
    }
  }
  for (let k = 0; k < arr1.length; k++) {
    let vale1 = false;
    for (let h = 0; h < arr2.length; h++) {
      if (arr1[k] === arr2[h]) {
        vale1 = true;
        break;
      }
    }
    if (vale1 === false) {
      newArr.push(arr1[k]);
    }
  }
  return newArr;
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
*/

// Seek and Destroy
/*
function destroyer(...arr) {
    return arr;

}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
*/

// Wherefore art thou

// function whatIsInAName(collection, source) {
//   let newA = [];
//   for (let i = 0; i < collection.length; i++) {
//     let exist = false;
//     for (let p in source) {
//       console.log(collection[i][p]);
//       console.log(source[p])
//       console.log(source[p]);
//       if (!collection[i].hasOwnProperty(p) || collection[i][p] !== source[p]) {
//         exist = false;
//         break;
//       }
//       else {
//         exist = true;
//       }
//     }
//     if (exist === true) {
//       newA.push(collection[i]);
//     }
//   }
//   return newA;
// }

// console.log(
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
// );

// Spinal Tap Case

// function spinalCase(str) {
//   var regex = /\s+|_+/g;

//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   console.log(str);
//   // Replace space and underscore with -
//   return str.replace(regex, "-").toLowerCase();;
// }

// console.log(spinalCase('TheAndyGriffithShow'));

// PIG LATIN

// function translatePigLatin(str) {
//   let regex = /[aeiouAEIOU]/g;
//   let vocal = regex;
//   if (vocal.test(str[0])) {
//     console.log("Empieza con una vocal");
//     return str + "way";
//   } 
//   else {
//     let aux = "";
//     let auxV = false;
//     for (let i = 0; i < str.length; i++) {
//       if (auxV === false) {
//         console.log(str[i]);
//         if (!vocal.test(str[i])) {
//           console.log(str[i]);
//           aux = aux + str[i];
//           console.log(aux);
//           str = str.slice(i, 0) + str.slice(i + 1);
//           i--;
//         } else {
//             auxV = true;
//             break;
//         }
//       } else {
//         break;
//       }
//     }
//       console.log(str);
//       console.log(aux);
//     return str + aux + 'ay';
//   }
// }
// console.log(translatePigLatin("california"));

//  SEARCH AND RREPLACE

// function myReplace(str, before, after) {
//   let regex = /[a-z]/g;
//   let low = regex;
//   if (low.test(before[0]) && low.test(after[0])){
//     return str.replace(before, after);
//   }
//   else{
//     if (low.test(before[0])){
//       after = after.replace(/([A-Z])/, after[0].toLowerCase());
//       console.log(after);
//       return str.replace(before, after);
//     }
//     else{
//       after = after.replace(/[a-z]/, after[0].toUpperCase());
//       return str.replace(before, after);
//     }
//   }
  
// }

// console.log(myReplace("I think we should look up there", "up", "down"));

// DNA Pairing
/*
function pairElement(str) {
  let arr = str.split("");
  let newA = []
  let auxA = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++){
    switch (arr[i]) {
      case 'G':
        auxA.push(arr[i] , 'C');
        newA.push(auxA);
        auxA = [];
        break;
      case 'C':
        auxA.push(arr[i] , 'G');
        newA.push(auxA);
        auxA = [];
        break;     
      case 'A':
        auxA.push(arr[i] , 'T');
        newA.push(auxA);
        auxA = [];
        break;    
      case 'T':
        auxA.push(arr[i] , 'A');
        newA.push(auxA);
        auxA = []
        break;
    }
    console.log(auxA);

  }
  return newA;
}

console.log(pairElement("ATCGA"));
*/

// MISSING LETTERS

// function fearNotLetter(str) {
  
//   // Convierto a Array
//   let arrLetters = str.split('');
//   console.log(arrLetters);
//   // Array con todos los ASCII
//   let arrAscii = [];
//   // Variable de letras faltantes 
//   let letters = "";
//   // Creo un rray con el rango de letras completo para despues comparar
//   for (let j = str.charCodeAt(0); j <= str.charCodeAt(str.length-1); j ++){
//     arrAscii.push(j);
//   }
//   // Si estan todas las letras retorno UNDEFINED
//   if (str.length == arrAscii.length){
//     return undefined;
//   }
  
//   let aux = true;
//   for (let i = 0; i < arrAscii.length; i++){
//     for ( let j = 0; j < str.length; j++){
//       if (arrAscii[i] == str.charCodeAt(j)){
//         aux = true;
//         break;
//       }
//       else{
//         aux = false;
//       }
//     }
//     if (aux == false){
//       letters = arrAscii[i];
//     }
//   }
//   return String.fromCharCode(letters);
// }

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// Sorted Union

// function uniteUnique(...arr) {
//   let newA = [];
//   for (let i = 0; i < arr.length; i ++){
//     for (let j = 0; j < arr[i].length; j++){
//       console.log(arr[i][j]);
//       if ( newA.indexOf(arr[i][j]) === -1){
//           newA.push(arr[i][j]);
//       }
//     }
//   }

//   return newA;
// }

// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

// Convert HTML Entities
/*
function convertHTML(str) {
  let newA = str.split('');
  console.log(newA);
  console.log(str);
  for (let i = 0; i < newA.length; i++){
    if (newA[i].includes('&')){
      newA[i] = newA[i].replace('&', '&amp;');
    }
    if (newA[i].includes('<')){
      newA[i] = newA[i].replace('<', '&lt;');
    }
    if (newA[i].includes('>')){
      newA[i] = newA[i].replace('>', '&gt;');
    }
    
    if (newA[i].includes('"')){
      newA[i] = newA[i].replace('"', '&quot');
    }
    if (newA[i].includes("'")){
      newA[i] = newA[i].replace("'", '&apos;');
    }
    if (newA[i].includes('<>')){
      newA[i] = newA[i].replace('<>', '&lt;&gt');
    }
  }
  let s = newA.join('')
  return s;
}

console.log(convertHTML('Stuff in "quotation marks"'));
*/ 

// Sum All Odd Fibonacci Numbers

// function sumFibs(num) {
//   for (let i = 1; i <= num; i ++){
//     if (i % 2 == 1){
//       console.log(i);
//     }
//   }

//   return num;
// }

// sumFibs(1000);

/*
function fib(num){
  if (num <= 0){
    return 0;
  }
  if (num <= 1){
    return 1;
  }
  if (num >= 2){
    let a = 0;
    let b = 1;
    let c = 0;
    let sum = 0;

    let vecF = [];
    for (let i = 0; c <= num; i++){
      vecF.push(a);
      c = a + b;
      if (c <=  num){
          b = a;
          a = c;
      }
   }
    for (let  k = 0; k < vecF.length; k++){
      if ( vecF[k] % 2 == 1){
      sum = sum + vecF[k];
      }
    }
    return sum;
  }
}
console.log(fib(75025));
*/

// Sum All Primes

function sumPrimes(num) {
  
  let sum = 0;
  let vecP = []
  

  for (let h = 2; h <= num; h++) {
    let isPrime = true;
    for (let i = 2; i < h; i++) {
      if (h % i == 0) {
        console.log(h);
        isPrime = false;
      }
    }

    if (isPrime){
      vecP.push(h);
      console.log(h);
      sum = sum + num;
    }
  }  

  console.log(vecP);
  return vecP;
}

console.log(sumPrimes(13));