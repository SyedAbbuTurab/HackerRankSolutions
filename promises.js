function getSum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const sum = a + b
        if (sum < 5) {
            resolve("Sum Resolved")
        } else {
            reject("Sorry Sum rejected!")
        }
    })

    return customPromise
}

function getSub(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const sub = a - b;

        if (sub < 5) {
            resolve("Sub Resolved")
        } else {
            reject("Sub Rejected")
        };

    })

    return customPromise
}

function getMul(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const mul = a * b;

        if (mul >= 0) {
            reject("Mul rejected")
        } else {
            resolve("Mul resolved")
        }
    })

    return customPromise;
}


let res = Promise.all([getSum(1, 2), getSub(1, 2), getMul(1, 2)])
res.then(data => console.log("Success:", data))
    .catch(err => console.log("Failed because:", err));

let resAllSettle = Promise.allSettled([getSum(1, 2), getSub(1, 2), getMul(1, 2)])
    .then(result => {
        result.forEach((res) => {
            if (res.status === 'fulfilled') {
                console.log("Success:", res.value);
            } else if (res.status === "rejected") {
                console.log("Failure:", res.reason);
            }
        })
    })
