
// Bubble sort

var bubbleSort = function (arr, bool) {
    let arrLength = arr.length;
    let temp;
    // Two ways to do it see if block
    if (bool) {
        for (let i = 0; i < arrLength - 1; i++) {
            for (let j = 0; j < arrLength; j++) {
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
// bubbleSort([...bigArr], true); // Regular version
bubbleSort([10, 15, 0, -1, 10, 88, 2, 3, 98, 88, 74, -15], true); // Regular version
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
    // console.log(arr);
}

insertionSort([5, 3, 8, 1, 2])

var mergeSort = (arr) => {

    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);

};

function merge(left, right) {
    let result = [];
    let i = 0; j = 0;

    while (i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));

}

console.log(mergeSort([6, 3, 8, 5, 2, 7, 4, 1]));
