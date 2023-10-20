function countSumNums(arr) {
  let postivNum = [];
  let sumNegativeNum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       postivNum.push(i);
  //     } else {
  //       sumNegativeNum += arr[i];
  //     }
  //   }
  arr.forEach((num) => {
      num > 0 ? postivNum.push(num) : sumNegativeNum += num;
  });
  return [postivNum.length, sumNegativeNum];
}
console.log(countSumNums([1, 2, 3, -5, -5]));
