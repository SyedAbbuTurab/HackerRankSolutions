
var removeDuplicates = (arr) => {
    const arrLength = arr.length;
    let uniqueArr = []
    for (let i = 0; i < arrLength; i++) {

        if (arr[i] !== arr[i - 1]) {
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

    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            uniqueArr.push(arr[i])
        }
    }
    // console.log(uniqueArr);

}

removeDuplicatesUnSort([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
)


var duplicatesTwoPointer = (arr) => {
    const arrLength = arr.length;
    let i = 0;
    for (let j = 1; j < arrLength; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]
        }
    }
    // console.log(arr.slice(0, i + 1));

}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
duplicatesTwoPointer(arr);


const moveZeroes = (arr) => {
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[i] = arr[j]
            i++;
        }
    }
    while (i < arr.length) {
        arr[i] = 0;
        i++;
    }

    console.log(arr);

}

console.log(moveZeroes([0, 1, 4, 0, 3, 12]));

