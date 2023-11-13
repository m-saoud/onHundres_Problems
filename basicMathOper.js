function mathOpertion(op, num1, num2) {
  // if (op == "+") return num1 + num2;
  // if (op == "-") return num1 - num2;
  // if (op == "/") return num1 / num2;
  // if (op == "*") return num1 * num2;
  // if (op == "%") return num1 % num2;

  return eval(num1 + op + num2);
}

console.log(mathOpertion("*", 4, 2));

function returnNestedObjectProperty(obj) {
  if (obj && typeof obj === "object") {
    if ("b" in obj) {
      if ("c" in obj) {
        return { c: obj.c };
      }
      return obj.b;
    }

    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const result = returnNestedObjectProperty(obj[key]);
        if (result) {
          return result;
        }
      }
    }
  }

  return undefined;
}

console.log(returnNestedObjectProperty({ a: { b: { c: 3 } } })); // { c: 3 }

function isSquare(n) {
  //   if (n < 0) {
  //     return false;
  //   } else {
  //     let squar = Math.sqrt(n);
  //     return Number.isInteger(squar);
  //   }
}

console.log(isSquare(1)); //flase

function XO(str) {
  str = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      countX++;
    } else if (str[i] === "o") {
      countO++;
    }
  }
  return countX === countO;
}
console.log(XO("xXoo")); //true

function XOx(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return x.length === o.length;
}
console.log(XOx("xxoo"));

function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    return a + b;
  }
}
console.log(getSum(5, -1)); //-1

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(isTriangle(4, 3, 9)); //true

////////////////////////////////////

function closestToZero(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
  console.log(sorted);
  return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
}

console.log(closestToZero([5, 2, 2]));

function* generator(a) {
  let b = 1;
  while (true) {
    const result = a * b;
    yield `${a} * ${b}=${result}`;
    b++;
  }
}
const gen = generator(10);

console.log(gen.next().value);

function* multiplicationGenerator(a) {
  let b = 1;

  while (true) {
    const result = a * b;
    yield `${a} x ${b} = ${result}`;
    b++;
  }
}

// Example usage:
const generator2 = multiplicationGenerator(5);

// Calling the generator multiple times
console.log(generator2.next().value); // Output: "5 x 1 = 5"

// ... and so on

function sortByLanguage(list) {
  for (let i = 0; i < list.length; i++) {
    const languageComparison = [...list].sort((a, b) =>
      a.language.localeCompare(b.language)
    );
    if (languageComparison !== 0) {
      return languageComparison;
    }
  }
  return a.firstName.localeCompare(b.firstName);
}

//
console.log(
  sortByLanguage([
    {
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
    {
      firstName: "Precious",
      lastName: "G.",
      country: "South Africa",
      continent: "Africa",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 30,
      language: "C",
    },
    {
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 19,
      language: "JavaScript",
    },
  ])
);

function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.sort((a, b) => {
      if (a === 0) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(1800));



function isSmooth(n) {
  let factor = 2;

  while (n > 1) {
    while (n % factor === 0) {
      n /= factor;
    }
    factor++;
  }

  if (factor - 1 === 2) {
    return "power of 2";
  } else if (factor - 1 === 3) {
    return "3-smooth";
  } else if (factor - 1 === 5) {
    return "Hamming number";
  } else if (factor - 1 === 7) {
    return "humble number";
  } else {
    return "non-smooth";
  }
}

console.log(isSmooth(16)); // "power of 2"
console.log(isSmooth(36)); // "3-smooth"
console.log(isSmooth(60)); // "Hamming number"
console.log(isSmooth(98)); // "humble number"
console.log(isSmooth(230)); // "non-smooth"

