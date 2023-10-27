function foDecN(n) {
  // return Number(n.toFixed(2));
  return Math.round(n * 100) / 100;
}

console.log(foDecN(1.23456));
