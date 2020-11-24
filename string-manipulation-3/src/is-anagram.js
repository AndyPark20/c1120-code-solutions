/* exported isAnagram */
function isAnagram(firstString, secondString) {

  var firstStringArray = firstString.split('');
  var secondStringArray= secondString.split('');
  var firstNoSpace=[];
  var secondNoSpace=[];

  for (var i=0; i<firstStringArray.length; i++){
    if (firstStringArray[i]!==" "){
      firstNoSpace.push(firstStringArray[i]);
    }
  }

  for (var j=0;j<secondString.length;j++){
    if(secondStringArray[j]!==" "){
      secondNoSpace.push(secondStringArray[j]);
    }
  }

  for (var h=0; h<firstNoSpace.length;h++){
    for (var z=0; z<secondNoSpace.length; z++){
      if(firstNoSpace[h]===secondNoSpace || secondNoSpace[z] ===firstNoSpace){
        return true;
      }else if (firstNoSpace[h]!==secondNoSpace[z] || firstNoSpace.length!==secondNoSpace.length){
        return false;
      }
    }
  }

}
