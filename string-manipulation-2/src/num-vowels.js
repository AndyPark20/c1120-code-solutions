/* exported numVowels */
function numVowels(string) {

  var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  var number = 0;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        number += 1;
      }
    }
  }
  return number;


}
