/* exported getStudentNames */

function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i < students.length; i++) {
    var propValue = students[i].name;
    newArray.push(propValue);
  }
  return newArray;
}
