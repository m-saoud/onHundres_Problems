function shortCut(word) {
  let vol = /[aeiouAEIOU]/gi;
  word = word.replace(vol, "");

  return word;
}

console.log(shortCut("syria"));

function shortCut2(word) {
  let vol = ["a", "e", "i", "o", "u"];
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (!word.includes(vol[i])) {
      result.push(i);
    }
  }

  return result.join();
}

console.log(shortCut("saoud alhasssoun "));
