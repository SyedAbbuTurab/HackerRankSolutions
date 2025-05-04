
var removeDuplicates = (arr) => {
    const arrLength = arr.length;
    let uniqueArr = []
    for(let i = 0; i < arrLength; i++) {

        if(arr[i] !== arr[i - 1]) {
            uniqueArr.push(arr[i])
        } 
    }
    console.log(uniqueArr);
    
}


var removeDuplicatesUnSort = (arr) => {

    // const setArr = [...new Set(arr)];
    // console.log(setArr);
    const seen = new Set();
    const uniqueArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!seen.has(arr[i])) {
            seen.add(arr[i]);
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr);
    
}

removeDuplicatesUnSort([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
)
