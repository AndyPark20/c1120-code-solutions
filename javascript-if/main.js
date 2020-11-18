/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {

  if (number < 5) {
    return true;
  } else {
    return false;
  }

}

console.log('the value of the function call isUnderFive is:', isUnderFive(6));

function isEven(number) {

  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }

}

console.log('the value of the function call isEven is:', isEven(8));

function startsWithJ(string) {

  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }

}

console.log('the value of the function call startsWithJ is:', startsWithJ('Javascript'));

function isOldEnoughToDrink(person) {

  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }

}

var personInfo = {
  name: 'Jason',
  age: '18'
}
console.log('the value of the function call isOldEnoughToDrink is:', isOldEnoughToDrink(personInfo));


function isOldEnoughToDrive(person) {

  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }

}

console.log('the value of the function call isOldEnoughToDrive is:', isOldEnoughToDrive(personInfo));

function isOldEnoughToDrinkAndDrive(person) {

  if (person) {
    return false;
  }

}
console.log('the value of the function call isOldEnoughToDrive is:', isOldEnoughToDrinkAndDrive(personInfo));

function categorizeAcidity(pH) {

  if (pH >= 0 && pH < 7) {
    return "acid"
  } else if (pH > 7 && pH < 14) {
    return "base"
  } else if (pH === 7) {
    return "neutral"
  } else {
    return "Invalid pH level"
  }

}

console.log('the value of the function call categorizeAcidity is:', categorizeAcidity(15));


function introduceWarnerBro(name) {

  if (name === "yakko" || name === "wakko") {
    return "we're the warner brothers!";
  } else if (name === "dot") {
    return "I'm cute~"
  } else {
    return "Goodnight everybody!"
  }

}

console.log('the value of the function call introduceWarnerBro is:', introduceWarnerBro("wakko"));
