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
