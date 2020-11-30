/* exported flatten */

function flatten(array) {

  var arrayFlat = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      arrayFlat.push(array[i][j])
    }
    if (typeof array[i] === 'number' || array[i] === false) {
      arrayFlat.push(array[i])
    }
  }

  return arrayFlat

}
