const numbers = [];
function recurse(number, prev, stack) {
    if (stack === 24) {
        numbers.push(number);
        return true;
    }

    for (const prime of primes(prev)) {

        let newNumber = number * prime;
        if (newNumber > 2 ** 32) {
            break;
        }

        if (!recurse(newNumber, prime, stack + 1)) {
            break;
        }
    }

    return true;
}

recurse(1, 2, 0);
console.log(numbers.length);

function* primes(n = 2) {
    while (true) {
        if (isPrime(n)) yield n;
        n++;
    }

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        if (num % 2 === 0) {
            return false;
        }

        for (var i = 3; i <= Math.sqrt(num) + 1; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
}
