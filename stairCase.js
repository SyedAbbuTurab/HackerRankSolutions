
function stairCase(n) {

    for (let i = 1; i <= n; i++) {
        
        const blanks = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(blanks + hashes);
        
    }
}

stairCase(5)
