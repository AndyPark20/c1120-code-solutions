/* exported toObject */
function toObject(keyValuePair) {

  var objectResult = {};
  for (var i = 0; i < keyValuePair.length - 1; i++) {
    objectResult[keyValuePair[i]] = keyValuePair[i + 1];
  }
  return objectResult;
}
