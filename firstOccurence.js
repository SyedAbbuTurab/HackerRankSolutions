
var strStr = function(haystack, needle) {
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        
        if( haystack.substring(i, i+needle.length)===needle) {
            return i
        }
            
    }
    return -1;
};

let haystack = "sadbutsad", needle = "sad"
console.log(strStr("sadbutsad", "sad"));   // Output: 0
console.log(strStr("leetcode", "leeto"));  // Output: -1
