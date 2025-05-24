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

removeDuplicatesArr([4, 5, 9, 4, 9, 1, 5]).then(console.log)


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

console.log(firstNonRepeating([4, 5, 1, 2, 0, 4, 5, 2])); // Output: 1
console.log(firstNonRepeating([7, 7, 8, 8]));             // Output: null

