function removEveryOther(array) {
  //   let newArry = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (i % 2 === 0) {
  //       newArry.push(array[i]);
  //     }
  //   }
  //   return newArry;

  return array.filter((a, i) => i % 2 === 0);
}

console.log(removEveryOther(["keep", "remove", "keep", "remove", "keep"]));
