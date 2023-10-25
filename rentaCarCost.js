function cost(d) {
  let basiPrice = 40;
  if (d <= 5 && d >= 3) {
    basiPrice = basiPrice * d - basiPrice * d * 0.2;
  } else if (d > 5) {
    basiPrice = basiPrice * d - basiPrice * d * 0.5
  } else {
    return basiPrice;
  }
  return basiPrice;
}

console.log(cost(6));
