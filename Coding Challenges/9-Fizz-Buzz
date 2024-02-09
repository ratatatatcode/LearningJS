/**
 * @param {number} n
 * @return {string[]}
 */

/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

var fizzBuzz = function(n) {
    number = [];
    for(i = 1; i <= n; i++) {
        console.log(n);
        if(i % 5 == 0 && i % 3 == 0) {
            number.push("FizzBuzz");
        }
        else if(i % 3 == 0) {
            number.push("Fizz");
        }
        else if(i % 5 == 0) {
            number.push("Buzz");
        }
        else {
            number.push(i.toString());
        }
    }

    return number;
};

// console.log(fizzBuzz(10));

/* From GPT
Again, I use gpt after solving the problem so I can see what to improve.

const fizzBuzz = function(n) {
    const fizz = 3;
    const buzz = 5; // Adding const and assigning 3 and 5 to a variable
    const result = [];

    for (let i = 1; i <= n; i++) { // Use let i
        if (i % fizz === 0 && i % buzz === 0) {
            result.push("FizzBuzz");
        } else if (i % fizz === 0) {
            result.push("Fizz");
        } else if (i % buzz === 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`); // Template literals
        }
    }

    return result;
};
*/

// var fizzBuzz = function(n) {
//     for(let i = 1; i <= 100; i++) {
//         if(n.isInteger(i/3)) {

//         }
//     }
// }