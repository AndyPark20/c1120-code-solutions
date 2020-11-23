/* exported omit */


function omit(source, keys) {

  for (var i = 0; i < keys.length; i++) {
    for (var values in source) {
      if (keys[i] === values) {
        delete source[values]

      }
    }

  }
  return source;
}
