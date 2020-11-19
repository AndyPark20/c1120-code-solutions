/* exported includesSeven */
function includesSeven(array) {

  for (var i = 0; i <= array.length; i++) {
    if (array[i] !== 7 || array[i]=== undefined) {
      var result = false;
    } else {
      return true;
    }
  }
  return result;

}
