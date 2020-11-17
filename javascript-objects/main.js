/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstName: "Andy",
  lastName: "Park",
  age: 30
};

var vehicle = {
  make: "Honda",
  model: "Civic",
  year: 2010
};

var pet = {
  name:'Gogo',
  type:'Pekingese',

};

var fullName = student.firstName + ' ' + student.lastName;
console.log('the full name of the student is:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Account Manager';

console.log('the value of lives in Irvine:', student.livesInIrvine);
console.log('the value of previous occupation:', student.previousOccupation);

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('the value of color:', vehicle['color']);
console.log('the value of is Convertible:', vehicle['isConvertible']);
console.log('the entire value of the object vehicle', vehicle);


delete pet.name;
delete pet.type;

console.log('the entire value of the object pet', pet);
