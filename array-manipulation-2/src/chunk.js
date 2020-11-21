/* exported chunk */

function chunk(array, size) {
  var finalArray = [];
  var masterArray = [];
  var newArray = [];

  if (array.length === 0) {
    return [];
  }

  for (j = array.length - 1; j >= size; j--) {
    if ((typeof array[j] === 'string') || (array[j] !== undefined) && (Boolean(array[j]) === false)) {
      newArray.push(array[j])

    } else {
      masterArray.push([array[j]])
    }
  }

  for (var i = 0; i < size; i++) {

    finalArray.push(array[i])
  }

  if (newArray.length !== 0) {
    var reversedArray = newArray.reverse()
    masterArray.push(reversedArray);
  }

  masterArray.push(finalArray);
  return masterArray.reverse();
}
