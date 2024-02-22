// ******** Write a Program to Filter Out Books Published Before 2000 and Return their Titles. ********

// <======== Example ========>
// Input: console.log(booksPublishedBefore2000)
// Output: ['Book 1', 'Book 3']


const books = [{ title: 'Book 1', year: 1998 },{ title: 'Book 2', year: 2003 },{ title: 'Book 3', year: 1995 },{ title: 'Book 4', year: 2001 }];
const booksPublishedBefore2000 = books
    .filter((book) => book.year < 2000)
    .map((item) => item.title);

console.log(booksPublishedBefore2000);