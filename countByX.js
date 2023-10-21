function countnByX(x, n) {
  z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}

console.log(countnByX(1, 10));

function newThnig(x, n) {
  let arr = Array.from(Array(n + 1).keys())
    .slice(1)
    .map((num) => num * x);
  return arr;
}
console.log(newThnig(2, 10));
