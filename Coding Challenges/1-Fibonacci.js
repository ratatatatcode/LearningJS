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