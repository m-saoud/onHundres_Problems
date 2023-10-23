function greting(lan) {
  let lans = {
    eng: "welcome",
    dutch: "hiser",
  };
  if (lans.hasOwnProperty(lan)) {
    return lans[lan];
  } else {
    return lans["eng"];
  }
}
console.log(greting("dutch"));
