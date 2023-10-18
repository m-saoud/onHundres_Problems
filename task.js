function task(arry) {
  if (arry == null) return 0;
  let maxarry = Math.max(...arry);
  let minarry = Math.min(...arry);

  let filterArry = arry
    .filter((x) => x !== maxarry && x !== minarry)
    .reduce((acc, cur) => acc + cur, 0);
  console.log(filterArry);
  return filterArry;
}

task([1, 5, 5, 5, 9]);
