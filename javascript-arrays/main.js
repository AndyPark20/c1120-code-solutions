
var colors =['red', 'white', 'blue'];

console.log('the value of colors[0]:', colors[0]);
console.log('the value of colors[1]:', colors[1]);
console.log('the value of colors[2]:', colors[2]);

var concat = "America is " + colors[0] + ", " + colors[1] + ", " + colors[2] + ".";
console.log(concat);


colors[2] ="green";
var concatRevise = "Mexico is " + colors[0] + ", " + colors[1] + ", " + colors[2] + ".";
console.log(concatRevise);
console.log('the value of array colors:', colors);


/********************* Students Array **********************************/

var students = ['Jennifer', 'Andy', 'Victor', 'Jasmine'];

var numberOfStudents = students.length;
var result ="There are " + numberOfStudents + " in the class."
console.log(result);

var lastIndex =numberOfStudents-1;
var lastStudent = students[lastIndex];
console.log('the last student in the array is', lastStudent);
console.log('the value of students:', students);
