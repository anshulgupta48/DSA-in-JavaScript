// ******** Write a Program to Search an Element in an Array ********

// <======== Example ========>
// Input: console.log(findElementIndex(arr, "Hello"));
// Output: 0

// Input: console.log(findElementIndex(arr, "Bye"));
// Output: -1




var findElementIndex = function(arr, str) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == str) {
            return i;
        }
    }

    return -1;
};

let arr = ["Hello", "Bro", "How", "Are", "You"];
console.log(findElementIndex(arr, "Hello"));
console.log(findElementIndex(arr, "Bye"));