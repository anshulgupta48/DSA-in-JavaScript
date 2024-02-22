// ******** Write a Program to Capitalize the First Letter of Each Word in an Array. ********

// <======== Example ========>
// Input: console.log(capitalizeFirstLetter)
// Output: ['Hello World', 'I Am Openai', 'Welcome To Javascript']


const strings = ['hello world', 'i am openai', 'welcome to javascript'];
const capitalizeFirstLetter = strings
    .map((item) => item.split(" "))
    .map((subItem) => subItem.map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" "));

console.log(capitalizeFirstLetter);