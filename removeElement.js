var removeElement = function(nums, val) {
    let i = 0; // Position to place next valid number

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i; // Number of non-val elements
};
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);

console.log(k);           // Output: 2
console.log(nums.slice(0, k)); // Output: [2, 2]
