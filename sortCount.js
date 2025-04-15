

function sortCount(arr) {
    
    let freqArr = new Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        freqArr[element]++
    }
    return freqArr;
    
}
let inputArr = [1,1,3,2,1]
sortCount(inputArr)

