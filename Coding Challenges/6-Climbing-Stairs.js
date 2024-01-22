// 6. Climbing Chairs (Barely Passed)
// I have already completed this task and sought GPT for a more refined solution.
/*
const height = 5; // You can change the height as needed

for (let i = 0; i < height; i++) {
    let spaces = ' '.repeat(height - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    console.log(spaces + stars);
}
*/

/**
 * @param {number} n
 * @return {number}
 */

// I asked for help from my brother. Found out that this is really related to Fibonacci.
var climbStairs = function(n) {
    let number = [];
    let a = 0, b=1, c;
    for(ctr = 0; ctr < n; ctr++) {
        c = a + b;
        number.push(c);
        a = b;
        b = c;
    }

    return number[number.length - 1];
};

console.log(climbStairs(5));