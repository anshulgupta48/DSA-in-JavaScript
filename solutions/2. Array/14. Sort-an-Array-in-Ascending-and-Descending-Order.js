// ******** Write a Program to Sort an Array in Ascending and Descending Order ********

// <======== Example ========>
// Input: console.log(sortAscending(arr);
// Output: [-9, -5, 0, 1, 4, 6]

// Input: console.log(sortDescending(arr);
// Output: [6, 4, 1, 0, -5, -9]




var sortAscending = function(arr) {
    arr.sort((a, b) => a - b);
    return arr;
};

var sortDescending = function(arr) {
    arr.sort((a, b) => b - a);
    return arr;
};

let arr = [1, 4, 6, 0, -9, -5];
console.log(sortAscending(arr));
console.log(sortDescending(arr));