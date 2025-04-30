
// Bubble sort

var bubbleSort = function (arr) {
    let arrLength = arr.length;
    let temp;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 2, 9, 1]));

