
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

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
)
