function sumPostivNum(arry) {
  return arry.filter((X) => X > 0).reduce((acc, cur) => acc + cur, 0);
}
console.log(sumPostivNum([1, 2, -3, -4]));
