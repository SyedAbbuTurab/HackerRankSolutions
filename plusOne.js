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

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = '';
    let carry = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += parseInt(a[i--]);
        if (j >= 0) sum += parseInt(b[j--]);

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;

};
