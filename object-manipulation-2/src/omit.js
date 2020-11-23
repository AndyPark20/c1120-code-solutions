/* exported omit */


function omit(source, keys) {

  var objectResult ={};
  for (var i = 0; i < keys.length; i++) {
    for (var values in source) {
      if (keys[i] === values) {
        delete source[values]
      }else {
        objectResult[keys[i]]=source[values];
      }
    }

  return objectResult;
}
