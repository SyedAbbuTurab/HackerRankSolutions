'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'xorAndSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function xorAndSum(a, b) {
    // Write your code here
    var len = b.length + 314159;
    var leadingA = len - a.length;
    var leadingB = len - b.length;
    var res = 0;
    var base = 1;
    var onesInRange = 0;
    var mod = 1000000007;
    for (var i = len - 1; i >= 0; i--) {
        var digitA;
        if (i >= leadingA) {
            var indexA = i - leadingA;
            digitA = Number(a.charAt(indexA));
        } else {
            digitA = 0;
        }
        var digitB;
        if (i >= leadingB) {
            var indexB = i - leadingB;
            digitB = Number(b.charAt(indexB));
        } else {
            digitB = 0;
        }

        var digitB2;

        if (i + 314160 < len) {
            digitB2 = b.charAt(i + 314160 - leadingB);
        } else {
            digitB2 = 0;
        }

        if (digitB == 1) {
            onesInRange++;
            onesInRange = onesInRange % mod;
        }
        if (digitB2 == 1) {
            onesInRange--;
            onesInRange = (onesInRange + mod) % mod;
        }

        if (digitA == 0) {
            res = (res + (onesInRange * base) % mod) % mod;
        } else {
            res = (res + ((314160 - onesInRange) * base) % mod) % mod;
        }

        base = (2 * base) % mod;
    }
    return res;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const result = xorAndSum(a, b);

    ws.write(result + '\n');

    ws.end();
}
