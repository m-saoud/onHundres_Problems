function get(mark) {
  let sum = 0;
  for (let i = 0; i < mark.length; i++) {
    sum += mark[i];
  }
  let avg =Math.floor(sum / mark.length) ;
  return avg;
}

console.log(get([12, 23, 45, 67]));


