function checkStr(str) {
  if (str === true) {
    console.log("YES");
    return "yes";
  } else if (str === false) {
    console.log("NO");
    return "no";
  } else {
    console.log("NO boolen");
  }
  return "NO boolen";
}
console.log(checkStr(false));
