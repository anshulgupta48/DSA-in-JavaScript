// ******** Write a Program to Check if Two Arrays are Equal or Not ********

// <======== Example ========>
// Input: console.log(isArrayEqual(arr1, arr2));
// Output: true

// Input: console.log(isArrayEqual(arr1, arr3));
// Output: false




var isArrayEqual = function(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
};

let arr1 = ["Hello", "Bro", "How", "Are", "You"];
let arr2 = ["Hello", "Bro", "How", "Are", "You"];
let arr3 = ["Bro", "How", "Hello", "Are", "You"];
console.log(isArrayEqual(arr1, arr2));
console.log(isArrayEqual(arr1, arr3));