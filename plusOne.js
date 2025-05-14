/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let digitsLen = digits.length;

    for (let i = digitsLen - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    console.log(digits);

};
console.log(
    plusOne([1, 2, 3])
);
console.log(
    plusOne([4, 3, 2, 1])
); console.log(
    plusOne([4, 3, 2, 9])
);
