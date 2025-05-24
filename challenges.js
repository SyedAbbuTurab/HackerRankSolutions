//🔹 Challenge: Remove Duplicates from an Array
const removeDuplicatesArr = async (arr) => {

    let setArr = new Set();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(!setArr.has(arr[i])) {
            setArr.add(arr[i]);
            result.push(arr[i])
        }
    }
    return result

}

removeDuplicatesArr([4, 5, 9, 4, 9, 1, 5]).then(console.log)
