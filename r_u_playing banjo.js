function play(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} is plying banjo`;
  } else {
    return `${name} is not plying banjo`;
  }
}

console.log(play("ramiz"));
