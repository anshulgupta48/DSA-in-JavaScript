// ******** Write a Program that finds the Missing Number in an Array ********

// <======== Example ========>
// Input: console.log(missingNumber([3,0,1]));
// Output: 2

// Input: console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
// Output: 8




function missingNumber(nums) {
    let totalSum = (nums.length) * (nums.length + 1) / 2;
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return (totalSum - sum);
}

console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));