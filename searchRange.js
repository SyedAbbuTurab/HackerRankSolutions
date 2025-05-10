/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    if(nums.length < 0) return [-1, -1];

    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            res.push(i)
        }   
    }
    return res
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
