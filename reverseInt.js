var reverse = function (x) {
    let digit, reversed = 0;
    while (x !== 0) {
        digit = x % 10
        reversed = reversed * 10 + digit
        x = Math.trunc(x / 10)
    }

    if(reversed< Math.pow(-2,31) || reversed > Math.pow(2,32) - 1){
        return 0;
    }
    return reversed

};

console.log(reverse(-120))

