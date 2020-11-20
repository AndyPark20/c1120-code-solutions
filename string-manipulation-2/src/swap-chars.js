/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {

  var array = string.split('');
  var char = "";

  for (i = 0; i < array.length; i++) {
    if (i === firstIndex) {
      array.splice(firstIndex, 0, array[secondIndex]);
      array.splice(secondIndex + 1, 0, array[firstIndex + 1])
      array.splice(firstIndex + 1, 1)
      array.splice(secondIndex + 1, 1)

    }
  }
  return array.join('');
}
