

var threeSum = function (nums) {

    let n = nums.length;
    let result = [];
    let temp;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp
            }
        }    
    }

    // Step 2: Loop through each number and use two pointers
    for (let i = 0; i < n - 2; i++) {
        // Skip duplicates for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
