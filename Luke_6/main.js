const max = 18163106;

let count = 0;
// Start the time
console.time('time');
for (let i = 1; i < max; i++) {

    let zeros = 0;
    let nonZeros = 0;
    let num = i;

    while (num > 0) {
        if (num % 10 === 0) {
            zeros++;
        } else {
            nonZeros++;
        }
        num = num / 10 | 0;
    }

    if (zeros > nonZeros) {
        count += i;
    }
}
// Stop the time
console.timeEnd('time');
console.log(count);
