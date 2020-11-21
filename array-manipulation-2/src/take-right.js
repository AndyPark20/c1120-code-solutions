/* exported takeRight */

function takeRight(array, count) {

  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= ((array.length) - count)) {
      newArray.push(array[i])
    } else if (array[i] === undefined) {
      return [];
    }
  }
  return newArray;

}
