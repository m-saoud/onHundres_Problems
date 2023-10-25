function cost(d) {
  let basiPrice = 40;
  if (d <= 5 && d >= 3) {
    basiPrice = Math.floor(` ${basiPrice * d - 1.2} `);
  } else if (d > 5) {
    basiPrice = Math.floor(basiPrice * d - 1.5);
  } else {
    return basiPrice;
  }
  return basiPrice;
}

console.log(cost(5));
