// Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    const size = digits.length;
    const last = size - 1;
    if(digits[last] !== 9) {
        digits[last]++;
    } 

    else if(digits[last] === 9 && size == 1) {
        digits[last] = 0;
        digits.unshift(1);
    }
    
    else if(digits[last] === 9 && size > 1) {
        digits[last] = 0;
        digits[last-1]++;
    }

    for(let i = size; i >= 1; i--) {
        if(digits[i] == 10) {
            digits[i] = 0;
            digits[i-1]++;
        }
    }

    if(digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([9,9])); // Output: [1,0,0]

/*
48 ms
Beats
81.72% of users with JavaScript (Tsamba/Chamba)
*/

/* From GPT
var plusOne = function(digits) {
    let carry = 1; // Start with a carry of 1 to add
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10; // Update current digit
        carry = Math.floor(sum / 10); // Calculate carry for next digit
    }
    // If there's a carry left, add it to the beginning of the array
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
}

console.log(plusOne([9,9]));
*/

/* Shorten Solution (From my code to ChatGPT)
var plusOne = function(digits) {
    const size = digits.length;
    const last = size - 1;

    for (let i = last; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
};

console.log(plusOne([9]));
*/