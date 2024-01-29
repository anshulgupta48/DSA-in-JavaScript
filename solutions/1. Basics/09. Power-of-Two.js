// ******** Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x. ********

// <======== Example ========>
// Input: n = 1
// Output: true

// Input: n = 3
// Output: false




var isPowerOfTwo = function(n) {
    if(n == 0) {
        return false;
    }

    while(n != 1) {
        if(n%2 != 0) {
            return false;
        }
        n = n / 2;
    }

    return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));