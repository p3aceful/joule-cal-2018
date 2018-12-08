const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

function Vekksort() {
    this.numbers = [];
    return {
        put: num => {
            const last = this.numbers[this.numbers.length - 1] || 0;
            if (last <= num) {
                this.numbers.push(num);
            }
        },
        sum: () => this.numbers.reduce((a, b) => a + b),
    }
}

const vs = new Vekksort();

lineReader.on('line', line => {
    vs.put(parseInt(line, 10));
});

lineReader.on('close', () => {
    console.log('Finished');
    console.log(vs.sum());
});