// ******** Write a Program to Reverse an Array ********

// <======== Example ========>
// Input: console.log(reverseArray(arr);
// Output: [-5, -9, 0, 6, 4, 1]




var reverseArray = function(arr) {
    for(let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }

    return arr;
};

let arr = [1, 4, 6, 0, -9, -5];
console.log(reverseArray(arr));