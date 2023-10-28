function sum(num) {
  //   let result = 0;
  //   String(num);

  //   for (let i = 0; i <= num; i++) {
  //     result += i;
  //   }
  //   Number(num);
  //   return result;
  return Array(num)
    .fill(num)
    .reduce((acc, curr, i) => acc + ++i, 0);
}

console.log(sum(10));
