/* exported union */
function union(first, second) {
  var condensed = first.concat(second);
  var result = [];
  for (var i = 0; i < condensed.length; i++) {
    if (condensed.indexOf(condensed[i]) === i) {
      result.push(condensed[i]);

    }
  }
  return result;
}
