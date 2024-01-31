// ******** Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums. ********

// <======== Example ========>
// Input: nums = [1,1,2]
// Output: 2

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5




var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length-1; j++) {
        if(nums[j] != nums[j+1]) {
            nums[i++] = nums[j];
        }
    }

    nums[i++] = nums[nums.length-1];
    return i;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));