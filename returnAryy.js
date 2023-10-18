function returnArry(n) {
  return n
    .toString()
    .split("")
    .map((m) => Number(m)).reverse();
}

console.log(returnArry(12345));
