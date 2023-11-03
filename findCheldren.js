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

console.log(accumMix([1, "2", 3, "5", "r", "s"]));

function fest(best, dish) {
  if (best[0] === dish[0] && best[best.length - 1] === dish[dish.length - 1]) {
    return true;
  } else {
    return false;
  }
}

console.log(fest("samer", "samar"));

// green => yalow => red => green
function upDateLight(currenColor) {
  switch (currenColor) {
    case "green":
      return "yalow";
      break;
    case "yalow":
      return "red";
      break;
    case "red":
      return "green";
      break;
    default:
      "null";
      break;
  }
}

console.log(upDateLight("yalow"));

function setAlarm(emplpyee, vaction) {
  if (emplpyee === true && vaction === false) {
    return true;
  } else {
    return false;
  }
}

console.log(setAlarm(true, true));

function checkQuarterOf(month) {
  if (month < 4) {
    return `Quarter 1`;
  } else if (month >= 4 && month < 6) {
    return `Quarter 2`;
  } else if (month >= 6 && month < 9) {
    return `Quarter 3`;
  } else {
    return `Quarter 4`;
  }
}
console.log(checkQuarterOf(7));

function addLength(str) {
  return str.split(" ").map((m) => m + " " + m.length);
}
console.log(addLength("saoud xxx"));

function correct(str) {
  return str
    .split("")
    .filter((m) => isNaN(parseInt(m)))
    .join();
}

console.log(correct("sa8oud"));

function correctstring(str) {
  return str.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');
}

console.log(correctstring("5a0ud1"));
