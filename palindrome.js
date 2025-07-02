var isPalindrome = function (int) {

  let num, reversed = 0;
  let original = int
  if (int < 0) {
    return false;
  }
  while (int !== 0) {
    num = int % 10
    reversed = reversed * 10 + num; s
    int = Math.trunc(int / 10)
  }
  return reversed == original;
};

// console.log(isPalindrome(-10));


var reverseStr = (str) => {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse;
}

console.log(reverseStr("Hello"));

