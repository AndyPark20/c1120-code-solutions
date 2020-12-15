/* exported difference */
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      continue;

    }
    result.push(first[i])
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) !== -1) {
      continue;

    }
    result.push(second[j])
  }
  return result;

}
