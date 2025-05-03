
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

const { performance } = require('perf_hooks'); // For Node.js


let bigArr = [];
for (let i = 0; i < 1000; i++) {
    bigArr.push(i); // Already sorted
}
let start1 = performance.now();
bubbleSort([...bigArr], true); // Regular version
let end1 = performance.now();

let start2 = performance.now();
bubbleSort([...bigArr], false); // Optimized version
let end2 = performance.now();

// console.log("Regular Bubble Sort time:", (end1 - start1).toFixed(4), "ms");
// console.log("Optimized Bubble Sort time:", (end2 - start2).toFixed(4), "ms");


// Selection Sort Begins Here

var selectionSort = function (arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;

            // Other way ppossible for Swap(Noticeable only in large datasets or hot loops)
            // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}

// console.log(selectionSort([5, 2, 9, 1]));

var insertionSort = (arr) => {
    const arrLength = arr.length;

    for (let i = 1; i < arrLength; i++) {
        let current = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current
    }
    console.log(arr);
}

insertionSort([5, 3, 8, 1, 2])
