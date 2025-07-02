var isPalindrome = function (int) {

  let num, reversed = 0;
  let original = int
  if (int < 0) {
    return false;
  }
  while (int !== 0) {
    num = int % 10
    reversed = reversed * 10 + num;s
    int = Math.trunc(int / 10)
  }
  return reversed == original;
};

// console.log(isPalindrome(-10));




