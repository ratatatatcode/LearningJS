// 8. Single Number
// I used the same code from 7 in Leetcode

// Solution From GPT
// var singleNumber = function(nums = []) {
//     let set = new Set(nums);
    
//     // Sum of all elements in the array
//     let sumAll = nums.reduce((acc, num) => acc + num, 0);

//     // Sum of unique elements in the set
//     let sumUnique = [...set].reduce((acc, num) => acc + num, 0);

//     // Calculate the single number
//     return (3 * sumUnique - sumAll) / 2;
// };

// // Example usage:
// const result = singleNumber([0, 1, 0, 1, 0, 1, 99]);
// console.log(result); // Output: 99
