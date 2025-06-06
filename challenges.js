//🔹 Challenge: Remove Duplicates from an Array
const removeDuplicatesArr = async (arr) => {

    return new Promise((res, rej) => {
        let setArr = new Set();
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (!setArr.has(arr[i])) {
                setArr.add(arr[i]);
                result.push(arr[i])
            }
        }
        res(result)
    })



}

// removeDuplicatesArr([4, 5, 9, 4, 9, 1, 5]).then(console.log)


const firstNonRepeating = (arr) => {
    const freqMap = {};

    // Count frequency of each number
    arr.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
    });

    // Find the first non-repeating number
    for (let i = 0; i < arr.length; i++) {
        if (freqMap[arr[i]] === 1) {
            return arr[i];
        }
    }

    return null;
};

// console.log(firstNonRepeating([4, 5, 1, 2, 0, 4, 5, 2])); // Output: 1
// console.log(firstNonRepeating([7, 7, 8, 8]));             // Output: null



const moveZeroes = (arr) => {

    let lastNonZerIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (i !== lastNonZerIndex) {
                [arr[i], arr[lastNonZerIndex]] = [arr[lastNonZerIndex], arr[i]]
            }
            lastNonZerIndex++;
        }
    }
    return arr;
};
// console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

const missingNumber = arr => {
    let n = arr.length;
    let sum = 0;

    let expectedSum = n * (n + 1) / 2;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
};

// console.log(missingNumber([3, 0, 1])); // Output: 2


const longestConsecutive = (arr) => {
    const numSet = new Set(arr);
    let maxLength = 0;

    for (let num of arr) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            maxLength = Math.max(maxLength, currentLength)
        }
    }
    return maxLength;
}

// console.log(longestConsecutive([100, 4, 5, 200, 1, 3, 2])); // Output: 5

const productExceptSelf = (nums) => {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Step 1: Left pass - store prefix products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Step 2: Right pass - multiply with suffix products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};

// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]


const findDuplicates = (nums) => {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            // If already negative, we've seen this number before
            result.push(Math.abs(nums[i]));
        } else {
            // Mark as visited by flipping the sign
            nums[index] = -nums[index];
        }
    }

    return result;
};

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]

const isSortedAndRotated = (arr) => {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const next = (i + 1) % n;
        if (arr[i] > arr[next]) {
            count++;
        }
    }

    // Valid if there is at most one "drop" in order
    return count <= 1;
};

// Test cases
// console.log(isSortedAndRotated([3, 4, 5, 1, 2])); // true
// console.log(isSortedAndRotated([2, 1, 3, 4]));     // false
// console.log(isSortedAndRotated([1, 2, 3]));        // true

const maxDifference = (arr) => {
    if (arr.length < 2) return 0;

    let minSoFar = arr[0];
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > minSoFar) {
            maxDiff = Math.max(maxDiff, arr[i] - minSoFar);
        } else {
            minSoFar = arr[i];
        }
    }

    return maxDiff;
};

// // // Test cases
// console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // Output: 8
// console.log(maxDifference([7, 9, 5, 6, 3, 2]));     // Output: 2
// console.log(maxDifference([10, 9, 8, 7]));          // Output: 0


function evenNum(arr) {
    let count = 0;

    arr.forEach((elem) => {
        if (elem % 2 == 0) {
            count++;
        }
    })

    return count;
}
// console.log(evenNum([1, 2, 3, 4, 5, 6]));


const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    const countMap = {};

    // Count elements in arr1
    for (let num of arr1) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    console.log(countMap);


    // Subtract counts using arr2
    for (let num of arr2) {
        if (!countMap[num]) return false;
        countMap[num]--;
    }

    return true;
};

// Test cases
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));   // true
// console.log(areArraysEqual([1, 2, 2], [2, 1, 1]));   // false
// console.log(areArraysEqual([4, 5], [5, 4]));         // true

function mergeAndSort(arr1, arr2) {
    let mergedArr = [...arr1, ...arr2];
    let temp;
    for (let i = 0; i < mergedArr.length - 1; i++) {
        if (mergedArr[i] >= mergedArr[i + 1]) {
            temp = mergedArr[i];
            mergedArr[i] = mergedArr[i + 1];
            mergedArr[i + 1] = temp
        }
    }
    return mergedArr;
}

// console.log(mergeAndSort([1, 3, 5], [2, 4, 6]));

function mergeAndSort1(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    let totalLength = arr1.length + arr2.length;

    for (let k = 0; k < totalLength; k++) {
        if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    return mergedArr;
}

// console.log(mergeAndSort1([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]


function secondLargest(arr) {
    let n = arr.length;
    let temp
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Find second unique largest
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] !== arr[n - 1]) {
            console.log(arr[i]);
            return;
        }
    }

    console.log(null); // If all elements are the same
}
// secondLargest([1, 4, 3, 5, 2, 5])

function getUniqueElem(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i]
    }

    return result;
}

// console.log(getUniqueElem([2, 3, 5, 4, 5, 3, 4])); // Output: 2

var getPositives = arr => {
    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

// console.log(getPositives([-2, 0, 3, 5, -1, 6]));

var sumOfEvens = arr => {
    let n = arr.length;

    let sum = 0;

    arr.forEach((elem) => {
        if (elem % 2 == 0) {
            sum += elem
        }
    })
    return sum;
}

// console.log(sumOfEvens([1, 2, 3, 4, 5, 6]));

function reverseArr(arr) {
    let n = arr.length;
    let reversed = []
    for (let i = n - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed;
}

// console.log(reverseArr([5, 4, 3, 2, 1]));

function findPairsWithSum(arr, target) {
    const seen = new Set();
    const result = [];

    for( let num of arr) {
        const compliment = target - num;
        if(seen.has(compliment)) {
            result.push([compliment, num])
        }
        seen.add(num)
    }
    return result
}
// console.log(findPairsWithSum([1, 2, 3, 4, 5], 6)); // Output: [ [2, 4], [1, 5] ]

function majorityElement(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Test case
console.log(majorityElement([2, 2, 1, 2, 3, 2, 2])); // Output: 2

