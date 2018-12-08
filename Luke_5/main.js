
// function generator(numbers, acc = 0, partial = [], isFirst = true) {

//     if (numbers.length === 0) {
//         if (acc === 42) {
//             console.log(partial.join('').slice(1));
//             str += partial.join('').slice(1) + '\n';
//             return 1;
//         } else {
//             return 0;
//         }
//     }

//     let sum = 0;
//     if (numbers.length > 1) {
//         const concat = numbers[0] + '' + numbers[1];
//         sum += generator(numbers.slice(2), acc + parseInt(concat), partial.concat('+' + concat), false);
//         if (!isFirst) {
//             sum += generator(numbers.slice(2), acc - parseInt(concat), partial.concat('-' + concat), false);
//         }
//     }

//     sum += generator(numbers.slice(1), acc + numbers[0], partial.concat('+' + numbers[0]), false);
//     if (!isFirst) {
//         sum += generator(numbers.slice(1), acc - numbers[0], partial.concat('-' + numbers[0]), false);
//     }
//     return sum;
// }

function generator(numbers, partial = []) {

    if (numbers.length === 0) {
        if (addbits(partial.join('')) === 42) {
            return 1;
        }
        // if (acc === 42) {
        //     console.log(partial.join('').slice(1));
        //     str += partial.join('').slice(1) + '\n';
        //     return 1;
        // } else {
        //     return 0;
        // }
        return 0;
    }

    let sum = 0;


    sum += generator(numbers.slice(1), partial.concat(numbers[0]), false);


    if (numbers.length > 1) {
        sum += generator(numbers.slice(1), partial.concat(numbers[0]).concat('+'), false);
        sum += generator(numbers.slice(1), partial.concat(numbers[0]).concat('-'), false);
    }
    return sum;
}

const calculate = (arr) => {
    let nums = [];
    let ops = [];

    arr.forEach(token => {
        switch (token) {
            case '+':
            case '-':

        }
    })
}
function addbits(s) {
    var total = 0, s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (s.length) {
        total += parseFloat(s.shift());
    }
    return total;
}
var count = 0;
let str = '';
console.log(generator([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(generator([1, 2, 3, 4, 5, 6, 7]));

