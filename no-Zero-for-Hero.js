function nozero(num) {
  return Number(Math.floor(num / 10)); // confirm last digite is zero ;
}

// console.log(nozero(200));

function nozero2(num) {
  let numTostring = String(num);
  if (numTostring.lastIndexOf("0") === numTostring.length - 1) {
    console.log(numTostring.length - 1);
    numTostring = numTostring.slice(0, numTostring.length - 1);
  }
  return Number(numTostring);
}

console.log(nozero2(230));
