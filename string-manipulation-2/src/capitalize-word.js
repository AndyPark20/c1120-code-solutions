/* exported capitalizeWord */
function capitalizeWord(word) {

  var result = "";
  for (var i = 0; i < word.length; i++) {
    if (i === 0 || word[i] === 's' || word[i] === 'S') {
      result += word[i].toUpperCase();
    } else if (i !== 0) {
      result += word[i].toLowerCase();
    }

  }
  return result;
}
