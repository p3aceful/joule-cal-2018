let counter = (function() {
    let count = 0;
    return {
        count: function() {
            count++;
        },
        show: function() {
            console.log(count);
        }
    }
})();

let numbers = require('fs')
    .readFileSync('input.txt', 'utf8')
    .split(/\r?\n/g)
    .reduce((thank_u, next) => {
        if (!thank_u) {
            thank_u.push(next);
            return thank_u;
        } else if (thank_u[thank_u.length - 1] > next) {
            return thank_u;
        } else {
            thank_u.push(next)
            return thank_u;
        }
    }, [])

console.log(numbers);
