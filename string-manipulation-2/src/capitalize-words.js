/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowered = string.toLowerCase();
  var splitResult = lowered.split(' ');
  var stringResult = '';

  for (var i = 0; i < splitResult.length; i++) {
    if (i=== splitResult.length - 1) {
      stringResult += splitResult[i].charAt(0).toUpperCase() + splitResult[i].slice(1);
    } else {
      stringResult += splitResult[i].charAt(0).toUpperCase() + splitResult[i].slice(1);
      stringResult += ' ';
    }
  }

  return stringResult;
}
