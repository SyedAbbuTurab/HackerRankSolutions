var longestCommonPrefix = function (strs) {

    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const initials = strs[0][i]
        for (let j = 0; j < strs.length; j++) {

            if (i >= strs[j].length || strs[j][i] !== initials) {
                return strs[0].substring(0, i)
            }

        }

    }
    return strs[0]

};




let res = longestCommonPrefix(["abb","abc"])
console.log(res);
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
