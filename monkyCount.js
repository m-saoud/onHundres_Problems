function monktCount(monkyNum) {
  if (monkyNum > 0) {
    let monkyNewArr = [];
    for (let i = 1; i <= monkyNum; i++) {
      monkyNewArr.push(i);
    }
    return monkyNewArr;
  }
}
console.log(monktCount(10));
