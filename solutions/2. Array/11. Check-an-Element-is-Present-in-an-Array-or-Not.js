// ******** Write a Program to Check if an Element is Present in an Array or Not ********

// <======== Example ========>
// Input: console.log(findElement(arr, "Hello"));
// Output: true

// Input: console.log(findElement(arr, "Bye"));
// Output: false




var findElement = function(arr, str) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == str) {
            return true;
        }
    }

    return false;
};

let arr = ["Hello", "Bro", "How", "Are", "You"];
console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "Bye"));