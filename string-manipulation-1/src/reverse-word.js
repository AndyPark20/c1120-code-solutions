/* exported reverseWord */
function reverseWord(word) {

  var result ='';
  for (var i=word.length-1; i>=0;i--){
    result+=word[i];
  }
  return result;

}
