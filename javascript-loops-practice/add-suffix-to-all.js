/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var newArray=[];
  for (var i=0; i<words.length; i++){
    var concat=words[i] + suffix;
    newArray.push(concat);
  }
  return newArray;
}
