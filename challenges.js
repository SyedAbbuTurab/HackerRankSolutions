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
