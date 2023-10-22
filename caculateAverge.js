function calcAve(arr) {
  if (arr !== null) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  }
}

console.log(calcAve([1, 1, 1]));
