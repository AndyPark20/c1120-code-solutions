/* exported invert */

function invert(source){
  var objectResult={};
  for (var values in source){
    objectResult[source[values]]=values;
  }

  return objectResult;
}
