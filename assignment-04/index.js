// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

// let totalmarks=prompt('enter your marks')
// for (let i = 0; i < 100; i++) {
//  if (i >= 60) {
//     console.log('F');}
//     else{
//       console.log('not');
//     }
//   }
const marks = [80, 90, 65, 70, 87, 75];

// Calculate the average of the marks
const sum = marks.reduce((acc, val) => acc + val, 0);
const avg = sum / marks.length;

// Determine the grade based on the average
let grade;
if (avg < 60) {
  grade = 'F';
} else if (avg < 70) {
  grade = 'D';
} else if (avg < 80) {
  grade = 'C';
} else if (avg < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

// Print the average and grade
console.log(`Average marks: ${avg}`);
console.log(`Grade: ${grade}`);