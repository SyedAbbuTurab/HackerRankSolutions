
var mergeTwoLists = function (list1, list2) {
    let mergedList = [...list1, ...list2]
    let temp
    for (let i = 0; i < mergedList.length; i++) {
        for (let j = 0; j < mergedList.length - 1 - i; j++) {
            if (mergedList[j] > mergedList[j + 1]) {
                temp = mergedList[j];
                mergedList[j] = mergedList[j + 1];
                mergedList[j + 1] = temp
            }
        }
    }
    return mergedList;
};

console.log(mergeTwoLists([1, 4, 5], [2, 3, 6]));

var lengthOfLastWord = function(s) {
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

