/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let result = s.split(' ').filter(word => word.length > 0);

    return result[result.length - 1].length

};
console.log(
    lengthOfLastWord("Hello World")

);
console.log(
    lengthOfLastWord("   fly me   to   the moon  ")

);
