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

function fearNotLetter(str) {
  
  // Convierto a Array
  let arrLetters = str.split('');
  console.log(arrLetters);
  // Array con todos los ASCII
  let arrAscii = [];
  // Variable de letras faltantes 
  let letters = "";
  for (let j = str.charCodeAt(0); j <= str.charCodeAt(str.length-1); j ++){
    arrAscii.push(j);
  }
  console.log(arrAscii);
  for (let i = 0; i < str.length; i++){
    console.log(str[i]);
    console.log(str.charCodeAt(i));
    for ( let k = 0; k < arrAscii.length; k ++){
      console.log(arrAscii[k]);
      if (str.charCodeAt(i) !== (arrAscii[k])){
        letters = arrAscii[k];
        break;
        
      }
  
    }
  }
  return letters;
}

console.log(fearNotLetter("abcdefghjklmno"));

// 'ABC'.charCodeAt(0); // returns 65

// var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
// console.log(str.charCodeAt(str.length - 1));
console.log(String.fromCharCode(110));
// Output: 90