function firstNonConNN(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return "Ok Array";
}
console.log(firstNonConNN([1, 2, 3, 4, 6]));

/*function firstNonConN(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i]; // Return the first non-consecutive element
    }
  }
  return "Ok Array"; // If the loop completes without finding any non-consecutive element
}

console.log(firstNonConN([1, 2, 3, 4, 6])); // This will return 6?*/
