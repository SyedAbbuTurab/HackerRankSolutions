
// Bubble sort

var bubbleSort = function (arr, bool) {
    let arrLength = arr.length;
    let temp;
    // Two ways to do it see if block
    if (bool) {
        for (let i = 0; i < arrLength; i++) {
            for (let j = 0; j < arrLength - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    } else {
        for (let i = 0; i < arrLength; i++) {
            let swapped = false;
            for (let j = 0; j < arrLength - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true
                }
            }
            if (!swapped) break;
        }
    }

    return arr;
}

console.log(bubbleSort([5, 2, 9, 1], false));

