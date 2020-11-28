/* exported unique */
function unique(array) {

  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      emptyArray.push(array[i])
    }

  }

  return emptyArray;
}
