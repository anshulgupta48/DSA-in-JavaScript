// ******** Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. ********

// <======== Example ========>
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121] 




var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }

    nums.sort((a, b) => a - b);
    return nums;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));