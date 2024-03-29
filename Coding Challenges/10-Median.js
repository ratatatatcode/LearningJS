// Median of Two Sorted Arrays (Hard)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}~
 */

const bubbleSort = function(arr) { // QuickSort is better for larger data
    const n = arr.length;
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < n - i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var findMedianSortedArrays = function(nums1, nums2) {
    let joined = nums1.concat(nums2);
    bubbleSort(joined);
    let mid = Math.floor(joined.length/2);
    if(joined.length % 2 == 1) {
        return joined[mid];
    } else {
        return (joined[mid] + joined[mid - 1])/2;
    }
};

console.log(findMedianSortedArrays([1], [2]));

/* In this problem, this approach can sometimes outperform merge sort.
var findMedianSortedArrays = function(nums1, nums2) {
    let joined = nums1.concat(nums2);
    joined.sort((a, b) => a - b);
    let mid = Math.floor(joined.length/2);
    if(joined.length % 2 == 1) {
        return joined[mid];
    } else {
        return (joined[mid] + joined[mid - 1])/2;
    }
};

console.log(findMedianSortedArrays([1], [2]));
*/

/* QuickSort for GPT
const quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat(pivot, quickSort(right));
    }
}
*/

/* MergeSort, fastest
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }
    
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }
    
    const totalLength = merged.length;
    const mid = Math.floor(totalLength / 2);
    
    if (totalLength % 2 === 1) {
        return merged[mid];
    } else {
        return (merged[mid - 1] + merged[mid]) / 2;
    }
};
*/