// #2 TwoSum (LeetCode)
// In an array, find the two indices that will sum up to the target. It should not return the same index.
// nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

// My Solution
var twoSum = function(nums, target) {
    number = []
    for(counter = 0; counter < nums.length; counter++) {
        for(secCounter = 0; secCounter < nums.length; secCounter++) {
            result = nums[counter] + nums[secCounter];
            if (counter == secCounter) {
                continue;
            }

            if(result == target) {
                number.push(counter);
                number.push(secCounter);
                return number;
            }
        }
    }
};

console.log(twoSum([3, 3], 6)); // Output: [0,1]

/*
// Solution From LeetCode
var twoSum = function(nums, target) {
    number = []
    for(counter = 0; counter < nums.length; counter++) {
        for(secCounter = 0 + 1; secCounter < nums.length; secCounter++) {
            if(target == nums[counter] + nums[secCounter]) {
                return [counter, secCounter];
            }
        }
    }
};

console.log(twoSum([3, 3], 6));
*/