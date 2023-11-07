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
  //   return str.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');
  const characters = {
    1: "i",
    5: "s",
    0: "o",
  };
  return str.replace(/[150]/g, (chare) => characters[chare]);
}

console.log(correctstring("5a0ud1"));

function between(a, b) {
  return Array(b - a - 1)
    .fill(a)
    .map((n, i) => i + n);
}

console.log(between(1, 7));

function between2(a, b) {
  if (a >= b) {
    return [];
  }
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
console.log(between2(1, 7));

function goosfilter(birds) {
  let goos = ["xxx", "sss", "aaa", "bbb"];
  let findSame = goos.filter((bird) => {
    return !birds.includes(bird);
  });
  return findSame;
}

console.log(goosfilter("xxx"));

function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

console.log(sumStr("5", "6"));

function arryPow(arr, n) {
  return arr.length - 1 < n ? -1 : Math.pow(arr[n], n);
}

console.log(arryPow([1, 7, 2, 4], 1));

function finMulty(int, limit) {
  let result = [];
  for (let i = 1; i <= limit; i++) {
    let mmultiply = int * i;
    if (mmultiply === limit) {
      result.push(mmultiply);
      break;
    } else {
      result.push(mmultiply);
    }
  }

  return result;
}

console.log(finMulty(5, 25));

function removDuplicatin(arr) {
  let uniqArr = [...new Set(arr)];
  return uniqArr;
}
console.log(removDuplicatin([1, 2, 3, 2, 4, 5, 5]));

function genratArry(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, i) => start + i);
}
console.log(genratArry(1, 10));

function capiFirstLettr(str) {
  return str.replace(/\b\w/g, (toupper) => toupper.toUpperCase());
}
console.log(capiFirstLettr("saoud"));

function flasyValue(arr) {
  return arr.filter(Boolean);
}

console.log(flasyValue([0, 1, true, false, 4, 6, -2]));

function reomveNum(atr) {
  return atr.filter((e) => typeof e === "string");
}
console.log(reomveNum([1, -2, 0, "s", 3.5]));

function saHello(name, city, state) {
  return `Welcome,${name
    .join(", ")
    .replace(/, ([^,]+)$/g, ", and $1")
    .replace(/\b\w/g, (toupper) => toupper.toUpperCase())} to ${city.replace(
    /\b\w/g,
    (toupper) => toupper.toUpperCase()
  )} ${state.replace(/\b\w/g, (toupper) => toupper.toUpperCase())}!`;
}
console.log(saHello(["saoud", "joun", "samer"], "damscuse", "syria"));

//name['and' + name-1]

function sort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sort([1, 3, 5, 2, 8, 7, 9, 10, 4]));

function myFunction(a) {
  return a.slice(0, 3);
}

console.log(myFunction([5, 4, 3, 2, 1]));

function myFunction(arr, n) {
  return arr[n - 1];
}

console.log(myFunction([1, 2, 3, 4, 5], 3));

function myFunction(a) {
  return a.length;
}
console.log(myFunction([1, 2, 2, 4, 5, 7, 8, 9, 0]));

function myFunction(a, b) {
  if (a.hasOwnProperty(b) || b === null) {
    return true;
  } else {
    return false;
  }
}
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));

function myFunction2(a) {
  // return a.replace(a[0], "") && (a[1], "") && (a[2], "");
  return a.slice(3);
}
console.log(myFunction2([99, 1, 1]));

function myFunctionss(str) {
  return str.substring(str.length - 3);
}

console.log(myFunctionss("1234"));

function typOfdata(a) {
  return typeof a ===  "boolean"
    ? "boolean"
    : typeof a ===  "number"
    ? "number"
    : typeof a ===  "string"
    ? " string"
    : typeof a ===  "object"
    ? "object"
    : Array.isArray(a)
    ? "array"
    : "I CANT SEE";
}
console.log(typOfdata(['1','3']));
