/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    if (nums.length < 0) return [-1, -1];

    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            res.push(i)
        }
    }
    return (res.length) === 0 ? [-1, -1] : [res[0], res[res.length - 1]]
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left+right) / 2);
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid -1
        }
    }
    return left;
};
console.log(searchInsert([1,3,5,6], 5));


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return x**n;
};
