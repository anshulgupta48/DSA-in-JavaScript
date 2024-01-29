// ******** Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive). ********

// <======== Example ========>
// Input: low = 3, high = 7
// Output: 3

// Input: low = 8, high = 10
// Output: 1




var countOdds = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++) {
        if(i%2 != 0) {
            count++;
        }
    }

    return count;
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));