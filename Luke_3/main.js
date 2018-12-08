const max = 2 ** 32;
let count = 0;

for (let p1 = primes(), a1 = p1.next().value; a1 < 600; a1 = p1.next().value) {
    for (let p2 = primes(a1), a2 = p2.next().value; a2 < 600; a2 = p2.next().value) {
        for (let p3 = primes(a2), a3 = p3.next().value; a3 < 600; a3 = p3.next().value) {
            for (let p4 = primes(a3), a4 = p4.next().value; a4 < 600; a4 = p4.next().value) {
                for (let p5 = primes(a4), a5 = p5.next().value; a5 < 600; a5 = p5.next().value) {
                    for (let p6 = primes(a5), a6 = p6.next().value; a6 < 600; a6 = p6.next().value) {
                        for (let p7 = primes(a6), a7 = p7.next().value; a7 < 600; a7 = p7.next().value) {
                            for (let p8 = primes(a7), a8 = p8.next().value; a8 < 600; a8 = p8.next().value) {
                                for (let p9 = primes(a8), a9 = p9.next().value; a9 < 600; a9 = p9.next().value) {
                                    for (let p10 = primes(a9), a10 = p10.next().value; a10 < 600; a10 = p10.next().value) {
                                        for (let p11 = primes(a10), a11 = p11.next().value; a11 < 600; a11 = p11.next().value) {
                                            for (let p12 = primes(a11), a12 = p12.next().value; a12 < 600; a12 = p12.next().value) {
                                                for (let p13 = primes(a12), a13 = p13.next().value; a13 < 600; a13 = p13.next().value) {
                                                    for (let p14 = primes(a13), a14 = p14.next().value; a14 < 600; a14 = p14.next().value) {
                                                        for (let p15 = primes(a14), a15 = p15.next().value; a15 < 600; a15 = p15.next().value) {
                                                            for (let p16 = primes(a15), a16 = p16.next().value; a16 < 600; a16 = p16.next().value) {
                                                                for (let p17 = primes(a16), a17 = p17.next().value; a17 < 600; a17 = p17.next().value) {
                                                                    for (let p18 = primes(a17), a18 = p18.next().value; a18 < 600; a18 = p18.next().value) {
                                                                        for (let p19 = primes(a18), a19 = p19.next().value; a19 < 600; a19 = p19.next().value) {
                                                                            for (let p20 = primes(a19), a20 = p20.next().value; a20 < 600; a20 = p20.next().value) {
                                                                                for (let p21 = primes(a20), a21 = p21.next().value; a21 < 600; a21 = p21.next().value) {
                                                                                    for (let p22 = primes(a21), a22 = p22.next().value; a22 < 600; a22 = p22.next().value) {
                                                                                        for (let p23 = primes(a22), a23 = p23.next().value; a23 < 600; a23 = p23.next().value) {
                                                                                            for (let p24 = primes(a23), a24 = p24.next().value; a24 < 600; a24 = p24.next().value) {
                                                                                                if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a19 * a20 * a21 * a22 * a23 * a24 < max) {
                                                                                                    count++;
                                                                                                } else {
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a19 * a20 * a21 * a22 * a23 * a23 > max) {
                                                                                                 break;
                                                                                            }
                                                                                        }
                                                                                        if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a19 * a20 * a21 * a22 * a22 * a22 > max) {
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                    if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a19 * a20 * a21 * a21 * a21 * a21 > max) {
                                                                                        break;
                                                                                    }
                                                                                }
                                                                                if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a19 * a20 * a20 * a20 * a20 * a20 > max) {
                                                                                    break;
                                                                                }
                                                                            }
                                                                            if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a19 * a19 * a19 * a19 * a19 * a19 > max) {
                                                                                break;
                                                                            }
                                                                        }
                                                                        if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a18 * a18 * a18 * a18 * a18 * a18 * a18 > max) {
                                                                            break;
                                                                        }
                                                                    }
                                                                    if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a17 * a17 * a17 * a17 * a17 * a17 * a17 * a17 > max) {
                                                                        break;
                                                                    }
                                                                }
                                                                if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a16 * a16 * a16 * a16 * a16 * a16 * a16 * a16 * a16 > max) {
                                                                    break;
                                                                }
                                                            }
                                                            if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a15 * a15 * a15 * a15 * a15 * a15 * a15 * a15 * a15 * a15 > max) {
                                                                break;
                                                            }
                                                        }
                                                        if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a14 * a14 * a14 * a14 * a14 * a14 * a14 * a14 * a14 * a14 * a14 > max) {
                                                            break;
                                                        }
                                                    }
                                                    if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a13 * a13 * a13 * a13 * a13 * a13 * a13 * a13 * a13 * a13 * a13 * a13 > max) {
                                                        break;
                                                    }
                                                }
                                                if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a12 * a12 * a12 * a12 * a12 * a12 * a12 * a12 * a12 * a12 * a12 * a12 * a12 > max) {
                                                    break;
                                                }
                                            }
                                            if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 * a11 > max) {
                                                break;
                                            }
                                        }
                                        if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 * a10 > max) {
                                            break;
                                        }
                                    }
                                    if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 * a9 > max) {
                                        break;
                                    }
                                }
                                if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 * a8 > max) {
                                    break;
                                }
                            }
                            if (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 * a7 > max) {
                                break;
                            }
                        }
                        if (a1 * a2 * a3 * a4 * a5 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 * a6 > max) {
                            break;
                        }
                    }
                    if (a1 * a2 * a3 * a4 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 * a5 > max) {
                        break;
                    }
                }
                if (a1 * a2 * a3 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 * a4 > max) {
                    break;
                }
            }
            if (a1 * a2 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 * a3 > max) {
                break;
            }
        }
        if (a1 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 * a2 > max) {
            break;
        }
    }
    if (a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 * a1 > max) {
        break;
    }
}

console.log(count);


function* primes(n = 2) {
    while (true) {
        if (isPrime(n)) yield n;
        n++;
    }

    function isPrime(num) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function* take(length, iterable) {
    for (let x of iterable) {
        if (length <= 0) return;
        length--;
        yield x;
    }
}