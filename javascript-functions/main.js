
/**********Convert Minutes to Seconds********/
function convertMinutesToSeconds(minutes) {
  var $userMinutes = minutes
  return $userMinutes * 60;
}

var convertResult =convertMinutesToSeconds(5)
console.log('the value of converted minutes to seconds is:', convertResult );

/******* greeting ***************************/
function greet (name) {
  var $userName =name;
  return 'Hey ' + $userName;
}

var greetResult = greet('Andy');
console.log('the value of function greet:', greetResult);


/******get Area *******************************/
function getArea(width, height) {
  var $userArea = width * height;
  return $userArea;
}

var getAreaResult =getArea(17,42);
console.log('the value of the area is:', getAreaResult);


/*********get first name ***************************/
function getFirstName (person) {
  var $userPerson = person.firstName;
  return $userPerson;
}

var personResult =getFirstName({firstName:'Jason', lastName:'Smith'})
console.log("the value of the perons's first name is:", personResult);


/**********Get Last Element  ****************************/
function getLastElement(array) {
  var $lastIndex =array.length-1;
  var $userLastElement =array[$lastIndex];
  return $userLastElement;
}

var arrayResult =getLastElement(['propane','and','propane','accessories']);
console.log('the last value of the index is:', arrayResult);
