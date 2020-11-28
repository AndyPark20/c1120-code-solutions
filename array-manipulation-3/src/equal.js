/* exported equal */
function equal(first, second) {

  var firstString=first.join('');
  var secondString=second.join('');

  if (firstString.includes(secondString)){
    return true;
  }else{
    return false;
  }


}
