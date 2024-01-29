// ******** Write a Program that Check if a Given Number is Palindrome or Not ********

// <======== Example ========>
// Input: console.log(isPalindrome(121));
// Output: true

// Input: console.log(isPalindrome(1234));
// Output: false




function isPalindrome(num) {
    let copyNum = num, reverseNum = 0;
    while(copyNum > 0) {
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum*10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return (num == reverseNum);
}

console.log(isPalindrome(121));
console.log(isPalindrome(1234));