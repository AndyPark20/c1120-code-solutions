/* exported capitalize */

function capitalize(word) {

  var lowerCase = word.toLowerCase();
  var firstCap = "";

  for (var i = 0; i < lowerCase.length; i++) {
    if (i === 0) {
      firstCap += lowerCase[i].toUpperCase() + lowerCase.slice(1);
    }
  }
  return firstCap;




}
