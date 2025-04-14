
function diagonaDifference(arr) {
    let leftDiagonalDifference = 0;
    let rightDiagonalDifference = 0;

    for (let i = 0; i < arr.length; i++) {
        leftDiagonalDifference += arr[i][i];
        rightDiagonalDifference += arr[i][arr.length - i - 1]
    }
    console.log(Math.abs(leftDiagonalDifference - rightDiagonalDifference))

}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

diagonaDifference(arr)
