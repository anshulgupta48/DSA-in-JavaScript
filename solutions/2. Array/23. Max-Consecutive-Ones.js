// ******** Given a binary array nums, return the maximum number of consecutive 1's in the array. ********

// <======== Example ========>
// Input: nums = [1,1,0,1,1,1]
// Output: 3 

// Input: nums = [1,0,1,1,0,1]
// Output: 2




var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            count++;
        }
        else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    return Math.max(maxCount, count);
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
