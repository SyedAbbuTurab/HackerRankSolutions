/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    let length = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count characters of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};

var lengthOfLastWord = function (s) {
    let result = s.split(' ').filter(word => word.length > 0);

    return result[result.length - 1].length

};
console.log(lengthOfLastWord("Hello World"));
console.log(
    lengthOfLastWord("   fly me   to   the moon  ")

);


