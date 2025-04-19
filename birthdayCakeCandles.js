

function birthdayCakeCandles(candles) {
    // Write your code here
    const sortedCandles = candles.sort()
    let count = 0;
    let tallestCandle = sortedCandles[sortedCandles.length - 1];


    for (let i = 0; i < sortedCandles.length; i++) {
        if(sortedCandles[i] == tallestCandle) {
            count++;
        }
    }
    console.log(count);
    
}



birthdayCakeCandles([3, 2, 1, 3])
