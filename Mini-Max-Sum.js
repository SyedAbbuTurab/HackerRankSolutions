

function miniMaxSum(arr) {
    // Write your code here
    let sortedArr = arr.sort();
    let minSum = 0, maxSum =0;

    
    for (let i = 0; i < (sortedArr.length - 1); i++) {
        minSum += sortedArr[i]
    }
    for (let i = 1; i < sortedArr.length; i++) {
        maxSum += sortedArr[i]
    }
    console.log(minSum, maxSum);
}

miniMaxSum([1, 3, 2, 5, 4])
