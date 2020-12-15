var books=[
{
  "isbn":"146464",
  "title": "JavaScript",
  "author": "John Doh"
},
{
  "isbn": "135764",
  "title": "Python",
  "author": "Jenny Smith"
},
{
    "isbn": "946484",
    "title": "C#",
    "author": "Andrew Johnson"
  }

];


var student ='{"name":"Andy","numberId":"7878","stringName":"JSON Test"}'
var bookStringify = JSON.stringify(books);
var studentParse = JSON.parse(student);


console.log('The value of array:', books);
console.log('Type of operator value of books:', typeof books);

console.log("The value of stringified books:", bookStringify);
console.log('Type of operator value of books stringified:', typeof bookStringify);

console.log("the value of student:", student);
console.log("Type of operator value of student:", typeof student);

console.log("The value of parsed student:", studentParse);
console.log("Type of operator value of Parsed student:", typeof studentParse);
