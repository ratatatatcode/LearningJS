// 7. Single Number (Passed, need to improve)
// (2 similar nums)
// But works with more than 2 similar numbers

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums = []) {
    let count = 0;
    for(i = 0; i <= nums.length; i++) {
        for(j = 0; j <= nums.length; j++) {
            if(i == j) {
                continue;
            }
            else if (i != j) {
                if(nums[i] == nums[j]) {
                    count++;
                }

                if(j == nums.length && count == 0) {
                    return nums[i]
                }
            }

            else {
                console.log("Failed.")
            }
        }
        count = 0;
    }
};

console.log(singleNumber([1,1,2]));

// Solution From GPT
// var singleNumber = function(nums = []) {
//     // Create a new Set to store unique elements
//     let set = new Set();

//     // Iterate through each element in the array
//     for (let i = 0; i < nums.length; i++) {
//         // Check if the set already contains the current element
//         if (set.has(nums[i])) {
//             // If it does, remove it from the set (cancel out the pair)
//             set.delete(nums[i]);
//         } else {
//             // If it doesn't, add it to the set
//             set.add(nums[i]);
//         }
//     }

//     // At this point, the set should contain only the single number
//     // as all other numbers would have been canceled out in pairs
//     // Return the single number using set.values().next().value
//     return set.values().next().value;
// };

// // Example usage:
// const result = singleNumber([2, 2, 1, 3, 1]);
// console.log(result); // Output: 3

// Solution From GPT
// var singleNumber = function(nums) {
//     // Your logic to find the single number goes here
//     // For example, using XOR to find the non-repeating element
//     let result = 0;
//     for (let num of nums) {
//       result ^= num;
//     }
//     return result;
// }
  
// // Example usage
// let nums = [1, 2, 2];
// console.log(singleNumber(nums));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// var singleNumber = function(nums) {
//     let result = 0;
//     for(let num of nums) {
//         result ^= num;
//     }

//     return result;
// };

// let nums = [2,2,1];
// console.log(singleNumber(nums));