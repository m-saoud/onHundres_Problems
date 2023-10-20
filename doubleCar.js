function doublCar(str) {
  return str
    .split("")
    .map((m) => m.repeat(2))
    .join([]);
}

console.log(doublCar("saoud"));
