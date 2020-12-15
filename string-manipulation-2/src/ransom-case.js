/* exported ransomCase */


function ransomCase(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else if (i % 2 === 1) {
      result += string[i].toUpperCase();
    }
  }
  return result;


}
