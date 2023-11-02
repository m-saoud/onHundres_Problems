function find(d) {
  let lower = d.toLowerCase().split("").sort().join("");
  let arr = lower;
  let obg = {};
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obg) {
      obg[arr[i]] += 1;
    } else {
      obg[arr[i]] = 1;
    }
    // console.log(obg);
  }

  for (let key in obg) {
    result += `${key.toUpperCase()}${key.repeat(obg[key] - 1)}`;
  }
  console.log(result);
  return result;
}
// console.log(find("AaeEeaaeEEEE"));

function formatString(input) {
  const charCount = new Map();
  const result = [];

  for (let char of input.toLowerCase()) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
    console.log(charCount);
  }

  for (const [char, count] of charCount) {
    result.push(char.toUpperCase() + char.repeat(count - 1));
  }

  return result;
}

console.log(formatString("aaaEE"));

function centryChick(year) {
  if (year % 100 == 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
}
console.log(centryChick(1789));

function truediveied(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return "Ok!";
  } else {
    return " Not Ok! ";
  }
}
console.log(truediveied(15, 15, 5));

function removChar(str) {
  //   return str.slice(1, -1);
  return str.slice(1, str.length - 1);
}

console.log(removChar("kaled"));

function squareNum(num) {
  return num.map((n) => n * n).reduce((acc, cur) => acc + cur, 0);
}
console.log(squareNum([1, 2, 3]));

function smalestInteger(numbers) {
  return numbers.map((n) => n % numbers === 0) ? Math.min(...numbers) : null;
  //   return Math.min(...numbers);
}
console.log(smalestInteger([1, 2, 5, 6, -3, -5678]));

function sumArry(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArry([1, 2], [1, 2]));

function accumMix(x) {
    return x
        .map((n) => (typeof n === "number" ? n : Number(n)))
        .filter((n) => !isNaN(n))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(accumMix([1, "2", 3, "5", "r",'s']));
