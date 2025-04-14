function lonelyInteger(arr) {

    let result = 0;

    for (const element of arr) {
        result ^= element
    }
    return result;
};

let arr = [1,4,5,4,5,6,6,8]

let response = lonelyInteger(arr)
console.log(response);
