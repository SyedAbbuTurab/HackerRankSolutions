function plusMinus(arr) {
    // Write your code here
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else {
            zeroes++;
        }
    }
    console.log((positives / arr.length).toFixed(6));
    console.log((negatives / arr.length).toFixed(6));
    console.log((zeroes / arr.length).toFixed(6));
}
