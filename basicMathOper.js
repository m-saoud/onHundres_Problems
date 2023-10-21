function mathOpertion(op, num1, num2) {
  // if (op == "+") return num1 + num2;
  // if (op == "-") return num1 - num2;
  // if (op == "/") return num1 / num2;
  // if (op == "*") return num1 * num2;
  // if (op == "%") return num1 % num2;

  return eval(num1 + op + num2);
}

console.log(mathOpertion("*", 4, 2));
