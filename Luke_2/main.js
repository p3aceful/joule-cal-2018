const getSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);

const dict = require('fs')
    .readFileSync('input.txt', 'utf8')
    .split(/\r?\n/g)
    .map(line => line.match(/(\d+(?!,)\d+)/g).map(Number))
    .map(vec => getSlope(...vec))
    .reduce((acc, current) => {
        return acc.has(current)
            ? acc.set(current, acc.get(current) + 1)
            : acc.set(current, 1);
    }, new Map());

console.log(Math.max(...dict.values()));