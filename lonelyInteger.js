function lonelyInteger(arr) {

    let result = 0;

    for (const element of arr) {
        result ^= element
    }
    return result;
};

let arr = [1, 2, 3, 2, 1, 4, 5];

let response = lonelyInteger(arr)
// console.log(response);

function getAllUniqueIntegers(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0) + 1
    }
    
    let repeats = [];

    for (let element in count) {
        
        if( count[element] === 1){
            repeats.push(Number(element))
        }
    }
    console.log(repeats);
}

getAllUniqueIntegers(arr)
