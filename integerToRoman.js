const intToRoman = num => {
  const romanNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

let roman = "";
for (let key in romanNum) {
  while (num >= romanNum[key]) {
    roman += key;
    num -= romanNum[key];
  }
}
return roman;
};

// Leetcode challenge found here: https://leetcode.com/problems/integer-to-roman/

// 1. Make object of key value pairs representing roman numerals (key) and their value (value)
// 2. Create empty string for the output of the function
// 3. Iterate through the object and while the parameter(num) is bigger than the value of each key, add that key (a roman numeral) to the roman string.
// 4. Then take away the value of the key (roman numeral) from the parameter(num) and loop through again until num = 0.
