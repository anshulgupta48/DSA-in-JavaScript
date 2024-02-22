// ******** Write a Program to Find the Length of Longest Word in an Array. ********

// <======== Example ========>
// Input: console.log(longestWordLength)
// Output: 11



const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];
const longestWordLength = words.reduce((maxLength, word) => {
    const currentLength = word.length;
    return ((currentLength > maxLength) ? currentLength : maxLength);
}, 0);

console.log(longestWordLength);