// ******** Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. ********

// <======== Example ========>
// Input: n = 4
// Output: 2

// Input: n = 8
// Output: 2




var mySqrt = function(x) {
    if(x < 2) {
        return x;
    }

    let start = 0;
    let end = x/2;
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if(mid*mid <= x && x < (mid+1)*(mid+1)) {
            return mid;
        }
        else if(mid*mid < x) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return -1;
};

console.log(mySqrt(4));
console.log(mySqrt(8));