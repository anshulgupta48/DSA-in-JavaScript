// ******** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. ********

// <======== Example ========>
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]




var moveZeroes = function(nums) {
    let start = 0;
    let end = start + 1;

    while(end <= nums.length - 1) {
        if(nums[start] != 0) {
            start++;
            end++;
        }
        else {
            if(nums[end] != 0) {
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
            }
            end++;
        }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));