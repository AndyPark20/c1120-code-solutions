/* exported isPalindromic */

function isPalindromic (string){

  var splitString=string.split('')
  var reversedString='';
  var stringNoSpace='';

  for (var i=splitString.length-1; i>=0;i--){
    if(splitString[i]!==" "){
      reversedString += splitString[i];
    }
  }
  for (var j=0; j<string.length;j++){
    if (string[j]!==" "){
      stringNoSpace+=string[j];
    }
  }

  if (stringNoSpace === reversedString){
    return true;
  }else{
    return false;
  }

}
