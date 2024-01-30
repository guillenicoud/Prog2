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

function spinalCase(str) {
  let regex = /[A-Z]/;
  console.log(regex.test(str)); 
  let word = "";
  for (let i = 0; i < str.length; i++){
    console.log(str[i])
    if (regex.test(str[i])) {
      word = word + str[i];
    }
  }

  return word;
}

console.log(spinalCase('This Is Spinal Tap'));

let regex = /\s|_|[A-Z]/gm;
let text = "AllThe-small Things";
if (regex.test(text)){
  console.log('Es Correcto');
}
else{
  console.log('Es Incorrecto');
}

