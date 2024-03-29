// ******** Write a Program that finds the Sum of all Digits of a Number ********

// <======== Example ========>
// Input: console.log(sumOfDigits(1287));
// Output: 18




function sumOfDigits(num) {
    let sum = 0;
    while(num > 0) {
        sum += (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(1287));