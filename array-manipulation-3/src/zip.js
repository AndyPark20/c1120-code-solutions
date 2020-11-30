/* exported zip */

function zip(first, second) {

  var emptyArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (i === j) {

        var concatResult = [first[i]].concat([second[j]]);
        emptyArray.push(concatResult);
      }
    }
  }
  return emptyArray;
}
