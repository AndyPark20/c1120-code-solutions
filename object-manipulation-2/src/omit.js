/* exported omit */


function omit(source, keys) {

  var object = {};
  for (var values in source) {
    object[values] = source[values]
  }

  for (var i = 0; i < keys.length; i++) {
    for (var valueSource in object) {
      if (keys[i] === valueSource) {
        delete object[valueSource];
      }
    }
  }
  return object;
}
