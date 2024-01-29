// ******** Write a Program that finds the Nth Fibonacci Number ********

// <======== Example ========>
// Input: console.log(fib(5));
// Output: 5

// Input: console.log(fib(10));
// Output: 55




function fib(num) {
    if(num < 2) {
        return num;
    }

    let prev = 0, curr = 1, next;
    for(let i = 2; i <= num; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return next;
}

console.log(fib(5));
console.log(fib(10));