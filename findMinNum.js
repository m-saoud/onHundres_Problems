// function min(arr, reTurn) {
//   if (reTurn === "ss") {
//     return Math.min(...arr);
//   } else {
//     return arr.indexOf(Math.min(...arr));
//   }
// }

// console.log(min([5, 1, 3, 4]));

function min(arr, reTurn) {
  return reTurn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

console.log(min([5, 78, 3, 4], "value"));
console.log(min([5, 78, 3, 4], "index"));
