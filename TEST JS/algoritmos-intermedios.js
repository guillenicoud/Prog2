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

function whatIsInAName(collection, source) {
  console.log(collection);
  console.log(source);
  console.log(Object.keys(collection));
  let collectionKey = Object.keys(collection[2]);
  let sourceKey = Object.keys(source);

  console.log(collectionKey);
  console.log(sourceKey)

  let arr = [];
  /*
  for (let i = 0; i < collectionKey.length; i++){
    for (let j = 0; j < sourceKey.length; j++){
      if ( collectionKey[i] === sourceKey[j]){
        console.log(collectionKey[i]);
        console.log(sourceKey[j]);
        console.log('Existe la Prop');
        arr.push(collection[i]);
      }
    }
  }
  */
  for ( let i = 0; collection.)
  for (let key in source){
    console.log(key)
  }
  console.log(arr);

  let prop = Object.keys(source);
  console.log(prop);
 
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
