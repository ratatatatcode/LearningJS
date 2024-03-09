// #1 Fibonacci Sequence
fibo = [0, 1];
function fiboSeq(totalCount) {
    a = 0, b = 1;
    for( count = 0; count < totalCount-2; count++) {
        c = a + b;
        fibo.push(c);
        a = b;
        b = c;
    }
    return fibo;
}

console.log(fiboSeq(7)); // Result: [ 0, 1, 1, 2, 3, 5, 8 ]

/* The Fibonacci numbers, commonly denoted F(n) form a sequence,
called the Fibonacci sequence, such that each number is the sum
of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n). */

/* Recursion Approach
var fib = function(n) {
    if(n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    return fib(n-1) + fib(n-2);
};
*/

/* Loop Approach (Faster)
var fib = function(n) {
    let a = 0;
    let b = 1;
    let c = 0;

    if(n == 1) {
        return 1;
    }

    for(let i = 1; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
};
*/