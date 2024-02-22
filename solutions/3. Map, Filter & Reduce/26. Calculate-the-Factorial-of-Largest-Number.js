// ******** Write a Program to Calculate the Factorial of Largest Number in an Array. ********

// <======== Example ========>
// Input: console.log(largestFactorial)
// Output: 40320



const numbers = [5, 2, 8, 4, 3];
const largestFactorial = numbers.reduce((largest, num) => {
    const currentFactorial = Array
    .from({ length: num })
    .map((_, i) => i + 1)
    .reduce((fact, val) => fact * val, 1);

    return ((currentFactorial > largest) ? currentFactorial : largest);
}, 1);

console.log(largestFactorial);