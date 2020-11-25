/* exported reverseWords */


function reverseWords(string) {

  var array = string.split('');
  var reversedStringArray = [];
  var finalStringResult = '';

  for (var i = array.length - 1; i >= 0; i--) {
    reversedStringArray.push(string[i]);

  }
  var finalReversedStringArray = reversedStringArray.join('');
  var finalSplit = finalReversedStringArray.split(' ');
  for (var k = finalSplit.length - 1; k > 0; k--) {
    finalStringResult += finalSplit[k] + ' ';

  }
  return finalStringResult += finalSplit[0];
}
