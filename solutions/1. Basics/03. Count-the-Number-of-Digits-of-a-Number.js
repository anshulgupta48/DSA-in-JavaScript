// ******** Write a Program that Counts the Digits of a Number ********

// <======== Example ========>
// Input: console.log(countDigits(121));
// Output: 3

// Input: console.log(countDigits(-1211413131));
// Output: 10




function countDigits(num) {
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);

    return count;
}

console.log(countDigits(121));
console.log(countDigits(-1211413131));