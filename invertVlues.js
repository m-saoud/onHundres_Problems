function invertValue(arr) {
  
 const newarry = arr.map((num) => (num > 0 ? num * -1 : Math.abs(num)));
  console.log(newarry);
  return newarry;
}

console.log(invertValue([1, 2, 3, -1, -4, -5]));
