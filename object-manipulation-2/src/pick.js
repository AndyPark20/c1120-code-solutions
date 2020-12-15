/* exported pick */

function pick(source, keys) {

  var resultObject = {};
  for (var values in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === values && source[values] !== undefined) {
        resultObject[keys[i]] = source[values]
      }
    }
  }
  return resultObject;
}
