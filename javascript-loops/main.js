/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */


/************************get Numbers to ten********************************** */
function getNumbersToTen() {

  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen:', getNumbersToTen());


/************************get even numbers to twenty *********************** */

function getEvenNumbersToTwenty() {

  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());


/************************ repeat word  ********************************** */
function repeatWord(word, times) {

  var count = 1;
  var repeated = "";

  while (count < times) {
    repeated += word;
    count++;

  }
  return repeated;
}

console.log('repeatWord', repeatWord('Javascript', 20));

/************************ log Each Character  ********************************** */

function logEachCharacter(string) {

  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }

}

logEachCharacter('Javascript');


/************************ Double All ********************************** */

function doubleAll(numbers) {

  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    var doubleElement = numbers[i] * 2;
    doubled.push(doubleElement);
  }
  return doubled;
}

console.log("doubleAll", doubleAll([5, 7, 9, 11]))


/************************ Double All ********************************** */

var info = {
  make: 'Honda',
  year: 2010,
  model: 'civic',
  color: 'white'
};

function getKeys(object) {

  var keys = [];
  var values;
  for (values in object) {
    keys.push(values);
  }
  return keys;
}


console.log('object:', info);
console.log('the key values of the object is:', getKeys(info));

/************************ get Values ********************************** */

function getValues(object) {

  var values = [];
  var propValue;
  for (propValue in object) {
    values.push(object[propValue]);
  }
  return values;

}
console.log('object:', info);
console.log('the get values of the object is:', getValues(info));
