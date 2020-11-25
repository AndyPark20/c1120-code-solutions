/* exported reverseWords */


function reverseWords(string) {

  var array = string.split('');
  var reversedStringArray = [];
  var finalStringResult = '';


  for (var i = array.length - 1; i >= 0.; i--) {
    reversedStringArray.push(array[i]);

  }
  var reversedWordString = reversedStringArray.join('')
  var reversedFinalWordArray = reversedWordString.split(' ')
  for (var k = reversedFinalWordArray.length - 1; k > 0; k--) {
    finalStringResult += reversedFinalWordArray[k] + ' ';
  }
  return finalStringResult + reversedFinalWordArray[0];


}
