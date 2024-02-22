// ******** Write a Program to Calculate the Average Score of Students Who Scored Above 90. ********

// <======== Example ========>
// Input: console.log(above90StudentsAverage)
// Output: 93.5


const students = [{ name: 'John', score: 85 }, { name: 'Sarah', score: 92 }, { name: 'Michael', score: 88 }, { name: 'Emma', score: 95 }, { name: 'Daniel', score: 90 }];
const above90StudentsAverage = students
    .filter((student) => student.score > 90)
    .reduce((acc, student, i, arr) => acc + student.score / arr.length, 0);

console.log(above90StudentsAverage);