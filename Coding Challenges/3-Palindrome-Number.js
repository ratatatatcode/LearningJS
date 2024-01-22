// #3 Palindrome Number (LeetCode)

/**
 * @param {number} x
 * @return {boolean}
 */

// It works but is still incorrect. Conversion from integer to string should not be used.
var isPalindrome = function(x) {
    let firstComparison = x.toString();
    let origilSplit = firstComparison.split('').join();
    let splitComparison = firstComparison.split('');
    let reverseComparison = splitComparison.reverse().join();

    if(origilSplit == reverseComparison) {
        return true;
    } else {
        return false;
    }
};

// I will find a better solution or come back here to solve again.