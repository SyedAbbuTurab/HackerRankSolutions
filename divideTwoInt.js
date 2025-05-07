var divide = function(dividend, divisor) {
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = -(2 ** 31);

    // Edge case: overflow
    if (dividend === MIN_INT && divisor === -1) return MAX_INT;

    // Determine the sign of the result
    const isNegative = (dividend < 0) !== (divisor < 0);

    // Work with absolute values
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    // Efficiently subtract using bit shifting
    while (a >= b) {
        let shift = 0;
        while (a >= (b << (shift + 1))) {
            shift++;
        }
        result += 1 << shift;
        a -= b << shift;
    }

    return isNegative ? -result : result;
};
