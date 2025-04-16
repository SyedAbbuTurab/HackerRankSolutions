function compareTriplets(a, b) {

    let alicePoints = 0;
    let bobPoints = 0;

    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            alicePoints++;
        } else if (a[i] < b[i]) {
            bobPoints++;
        }
    }
    return [alicePoints, bobPoints]
    
}
let a = [1, 2, 3]
let b = [3, 2, 1]

let res = compareTriplets(a,b)
console.log(res);

