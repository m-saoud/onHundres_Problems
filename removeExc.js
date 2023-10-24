function remove(str) {
    return str.replace(/!/,'');
}
//   console.log(remove.m("!hi!!!"));

let mySTr = "Aa!B!CcDdE127fGgm%v^$HhJj765";
let mySTraToz = /[a-zA-Z][^(%)!]/gi;

// console.log(mySTr.match(mySTraToz))

let emai = "o@ 12@fas.com @ I@gmail.net Kkklh123 .com...i.. nfo.. 1@gmail.com  451@gmail.com 1";
let dot = / \d+@\w+.(com|net)/g; 
//  console.log(emai.match(dot))

let sapam = "spamspam ahspam hkSpam saoud mazen spammazen";
let spamSerch = /(\bspam)/gi;

// console.log(sapam.match(spamSerch));

document.getElementById('regester').onsubmit = function () {
   let phonInput=document.getElementById('phone').value
   let  phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/  
   let  result = phoneRe.test(phonInput)
    console.log(result) 
    return false

    
    
}