function substringDiff(k, s1, s2) {
    const n = s1.length;
    let maxLen = 0;

    // Try all diagonals (alignments)
    for (let d = -n + 1; d < n; d++) {
        let i = Math.max(0, -d);
        let j = Math.max(0, d);
        let mismatches = 0;
        let left = 0;

        for (let right = 0; i + right < n && j + right < n; right++) {
            if (s1[i + right] !== s2[j + right]) {
                mismatches++;
            }

            while (mismatches > k) {
                if (s1[i + left] !== s2[j + left]) {
                    mismatches--;
                }
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen;
}
console.log(substringDiff(2, "tabriz", "torino"));       // Output: 4
console.log(substringDiff(0, "abacba", "abcaba"));       // Output: 3
console.log(substringDiff(3, "helloworld", "yellomarin")); // Output: 8
