/* Binary Search
The binary search algorithm works on the principle of divide and conquer
and it is considered the best searching algorithm because it's faster to run.
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    for(ctr = 0; ctr < arr.length; ctr++) {
        let mid = Math.floor((right+left)/2);
        if(arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
}

console.log(binarySearch([1,2,3,4,5,6], 6));