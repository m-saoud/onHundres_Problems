function loveFun(flowr1, flowr2) {
  if (flowr1 === flowr2) {
    return " love ";
  } else {
    return " non love ";
  }
}
console.log(loveFun(2, 3));

function loveFun2(flowr1, flowr2) {
  return flowr1 % 2 !== flowr2 % 2 ? "love" : "non love";
}
console.log(loveFun2(6, 3));
