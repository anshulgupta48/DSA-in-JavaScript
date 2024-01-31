// ******** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. ********

// <======== Example ========>
// Input: nums = [3,2,2,3], val = 3
// Output: 2

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5




var removeElement = function(nums, val) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] != val) {
            nums[i++] = nums[j];
        }
    }

    return i;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));