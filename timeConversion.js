/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const meridian = s.slice(-2);
    let [hour, minutes, seconds] = s.slice(0, -2).split(':')
    hour = parseInt(hour)

    if (meridian === 'AM') {
        if (hour === 12) hour = 0; // midnight
    } else if (meridian === 'PM') {
        if (hour !== 12) hour += 12; // afternoon/evening
    }
    hour = hour.toString().padStart(2, '0');
    
    return `${hour}:${minutes}:${seconds}`
}
let res = timeConversion('12:40:22AM')
console.log(res);




