// ******** Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array. Return the leftmost pivot index. If no such index exists, return -1. ********

// <======== Example ========>
// Input: nums = [1,7,3,6,5,6]
// Output: 3

// Input: nums = [1,2,3]
// Output: -1




var pivotIndex = function(nums) {
    let totalSum = 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for(let i = 0; i < nums.length; i++) {
        totalSum -= nums[i];
        if(totalSum == sum) {
            return i;
        }
        sum += nums[i];
    }

    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));