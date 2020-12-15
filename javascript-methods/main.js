
var one = 1;
var two = 2;
var three = 3;
var heroes = ['Hulk', 'IronMan', 'Thor', 'SpiderMan']

var maximumValue = Math.max(one, two, three)
console.log('the maximum value is:', maximumValue);


var randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log("The value of of random Index is:", randomIndex);
var randomHero = heroes[randomIndex];
console.log("The value of random Hero is:", randomHero);

/****************************Array Methods ***************************/

var library = [
  {
    title:"The Great Gatsby",
    author: "Scott Fitzgerald",
  },
  {
    title:"The Grapes of Wrath",
    author:"John Steinbeck"
  },
  {
    title:"The Catcher in the Rye",
    author:"J.D. Salinger"
  }
];

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}



var lastBook =library.pop();
console.log('the value of last book is:', lastBook);

var firstBook =library.shift();
console.log('The value of the firstbook is', firstBook);

library.push(js);
library.unshift(css);
library.splice(1,1);

console.log('the value of the library is', library);

/******String Methods *************************/

var fullName ="Andy Park";

var firstAndLastName =fullName.split(' ');
console.log('the value of first and last name is:', firstAndLastName);

var firstName =firstAndLastName[0];
var sayMyName =firstName.toUpperCase();
console.log('the result of say my name in uppercase is:', sayMyName);
