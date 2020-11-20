/* exported initial */

function initial(array) {

  var arrayResult =[];
  for (var i=0; i<array.length; i++){
    if (array[i]===undefined){
      return [];
    }else if (i !== array.length-1){
      arrayResult.push(array[i]);
    }
  }
  return arrayResult;
}
