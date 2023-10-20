function checkSquare(arr) {
//   let newArry = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Number.isInteger(Math.sqrt(arr[i]))) {
//       newArry.push(Math.sqrt(arr[i]));
//     } else {
//       newArry.push(arr[i] * arr[i]);
//     }
//   }
    //   return newArry;
    return arr.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num);
}

console.log(checkSquare([4, 3, 9, 7, 2, 1]));
