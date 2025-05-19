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
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([4, 3, 2, 9]));

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

console.log(addBinary("11", "1"));     // Output: "100"
console.log(addBinary("1010", "1011")) // Output: "10101"


var deleteDuplicates = function (head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            // Skip the duplicate
            current.next = current.next.next;
        } else {
            // Move to next node
            current = current.next;
        }
    }

    return head;
};
var mySqrt = function (x) {
    if (x < 2) return x; // Handle 0 and 1 quickly

    let left = 1;
    let right = x;
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid; // Perfect square
        } else if (square < x) {
            result = mid;    // Save the candidate
            left = mid + 1;  // Try higher
        } else {
            right = mid - 1; // Try lower
        }
    }

    return result; // Floor of square root
};
console.log(mySqrt(4));  // Output: 2


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second
        first = second;
        second = third;
    }
    return second;
};
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5





