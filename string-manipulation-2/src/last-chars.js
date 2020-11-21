/* exported lastChars */

function lastChars(length, string) {

  var opposite = '';
  var finalResult = '';
  for (var i = string.length - 1; i >= 0; i--) {
    opposite += string[i]
  }
  var oppositeChar = opposite.slice(0, length);
  for (var j = oppositeChar.length - 1; j >= 0; j--) {
    finalResult += oppositeChar[j];
  }
  return finalResult;
}
