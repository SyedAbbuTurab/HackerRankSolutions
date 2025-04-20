var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = [];
    const maxLength = Math.max(l1.length, l2.length);

    for (let i = 0; i < maxLength; i++) {
        const val1 = i < l1.length ? l1[i] : 0;
        const val2 = i < l2.length ? l2[i] : 0;

        const sum = val1 + val2 + carry;
        
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        
    }

    // If there's still a carry left, add it
    if (carry > 0) {
        result.push(carry);
    }

    return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // Output: [7, 0, 8]
