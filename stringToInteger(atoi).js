var myAtoi = function (s) {

    let i = 0; sign = 1, number = 0;


    while (i < s.length && s[i] == ' ') {
        i++;
    }

    if (s[i] === '+') {
        sign = 1;
        i++;
    } else if (s[i] === '-') {
        sign = -1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0' // Converts character to integer
        if (number > Math.floor((2 ** 31 - 1) / 10) ||
            (number === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
            return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
        }

        number = number * 10 + digit;
        i++;
    }

    return number * sign;

}
console.log(
    myAtoi("    -42")
)
