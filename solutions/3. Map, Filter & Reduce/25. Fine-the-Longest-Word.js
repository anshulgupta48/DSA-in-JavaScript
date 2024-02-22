// ******** Write a Program to Find the Longest Word in an Array. ********

// <======== Example ========>
// Input: console.log(longestWord)
// Output: dragonfruit



const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];
const longestWord = words.reduce((longestWord, word) => {
    return ((word.length > longestWord.length) ? word : longestWord);
}, "");

console.log(longestWord);