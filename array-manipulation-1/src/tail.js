/* exported tail */

function tail (array) {
  var arrayResult=[];
  for (var i=0; i<array.length; i++){
    if(i!==0){
      arrayResult.push(array[i]);
    }
  }
  return arrayResult;
}
