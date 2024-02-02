// ******** Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. ********

// <======== Example ========>
// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2




var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    return nums[mid];
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));