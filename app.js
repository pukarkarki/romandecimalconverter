let n2r = {1:"I",
       2:"II",
       3:"III",
       4:"IV",
       5:"V",
       6:"VI",
       7:"VII",
       8:"VIII",
       9:"IX",
       10:"X",
       20:"XX",
       30:"XXX",
       40:"XL",
       50:"L",
       60:"LX",
       70:"LXX",
       80:"LXXX",
       90:"XC",
       100:"C",
       200:"CC",
       300:"CCC",
       400:"CD",
       500:"D",
       600:"DC",
       700:"DCC",
       800:"DCCC",
       900:"CM",
       1000:"M",
       2000:"MM",
       3000:"MMM",
       4000:"MMMM",
       5000:"MMMMM"};
let r2n = {"I":1,
               "V":5,
               "X":10,
               "L":50,
               "C":100,
               "D":500,
               "M":1000
};

function convertToRoman() {
  let num = document.getElementById("num").value 
  let nArr = [];
  let rArr = [];
  let c = 0;
  while(num !== 0){
    //Extract the last digit 
    var r = num%10;
    //Find the base value of the number
    var baseValue = r*Math.pow(10,c++);
    //Truncate 1 digit from right
    num = Math.floor(num/10);
    nArr.unshift(baseValue);
  }
  //Push the Roman values in an array
 for (let i=0; i<nArr.length; i++){
   rArr.push(n2r[nArr[i]]);
 }
 //Convert the array into a single string
 let ans =  rArr.join("");
 document.getElementById("op").value = ans;
}

function convertToNumber(){
  let inp = document.getElementById("op").value;
  let res = 0;
  for (i = 0; i < inp.length; i++) {
      // Getting value of symbol s[i]
      var s1 = r2n[inp.charAt(i)];
      // Getting value of symbol s[i+1]
      if (i + 1 < inp.length) {
          var s2 = r2n[inp.charAt(i + 1)];
          // Comparing both values
          if (s1 >= s2) {
              // Value of current symbol
              // is greater or equalto
              // the next symbol
              res = res + s1;
          } 
          else {
            // Value of current symbol is
            // less than the next symbol
            res = res + s2 - s1;
            i++;
          }
      }
      else {
          res = res + s1;
      }
  }
  document.getElementById("num").value = res;
}