function checkBounces(salary, bounance) {
  //   if (bounance === true) {
  //     salary = salary * 10;
  //     return salary;
  //   } else {
  //     return salary;
  //   }
  return bounance ? salary * 10 : salary;
}

console.log(checkBounces(100, true));
