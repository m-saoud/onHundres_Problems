function find(letter) {
  let alphaBitArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let positions = alphaBitArr.map((m, inedx) =>
    m === letter ? `postion of : ${inedx + 1}` : null
  );
    return positions.filter((pos) => pos !== null).join();
    
}

console.log(find("z"));
