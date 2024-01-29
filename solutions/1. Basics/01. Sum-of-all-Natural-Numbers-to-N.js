// ******** Write a Program that finds the Sum of all Natural Numbers from 1 to N ********

// <======== Example ========>
// Input: console.log(sumOfNaturalNumber(5));
// Output: 15

// Input: console.log(sumOfNaturalNumber(10));
// Output: 55

// Input: console.log(sumOfNaturalNumber(8));
// Output: 36




function sumOfNaturalNumber(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNaturalNumber(5));
console.log(sumOfNaturalNumber(10));
console.log(sumOfNaturalNumber(8));