/* exported getValues */

function getValues(object){
  var arrayResult =[];
  for(var values in object){
    arrayResult.push(object[values]);
  }
  return arrayResult;
}
