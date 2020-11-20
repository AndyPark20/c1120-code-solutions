/* exported compact */
function compact(array) {

  var arrayResult = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      arrayResult.push(array[i])
    }
  }
  return arrayResult;

}
