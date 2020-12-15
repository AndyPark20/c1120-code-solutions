/* exported titleCase */
function titleCase(title) {
  var arrayResult = title.split(' ');
  var stringResult = '';
  for (var i = 0; i < arrayResult.length; i++) {
    if (arrayResult[i] === 'web') {
      stringResult += arrayResult[i].charAt(0).toUpperCase() + arrayResult[i].slice(1) + ' ';
    } else if (arrayResult[i] === 'api') {
      stringResult += arrayResult[i].toUpperCase();
    } else if (arrayResult[i] === 'in-depth') {
      stringResult += arrayResult[i].charAt(0).toUpperCase() + arrayResult[i].slice(1, 3) + arrayResult[i].charAt(3).toUpperCase() + arrayResult[i].slice(4, 8) + ' ';
    } else if (arrayResult[i] === 'javascript' || arrayResult[i] === 'javascript:' || arrayResult[i] === 'Javascript:') {
      stringResult += arrayResult[i].charAt(0).toUpperCase() + arrayResult[i].slice(1, 4) + arrayResult[i].charAt(4).toUpperCase() + arrayResult[i].slice(5, 11) + ' ';
      arrayResult[i + 1] = arrayResult[i + 1].charAt(0).toUpperCase() + arrayResult[i + 1].slice(1);
    } else if (i === arrayResult.length - 1 && arrayResult[i].length >= 4) {
      stringResult += arrayResult[i].charAt(0).toUpperCase() + arrayResult[i].slice(1);
    } else if (arrayResult[i].length < 4) {
      stringResult += arrayResult[i] + ' ';
    } else if (arrayResult[i] !== 'javascript' && arrayResult[i].length >= 4 && i !== arrayResult.length - 1) {
      stringResult += arrayResult[i].charAt(0).toUpperCase() + arrayResult[i].slice(1) + ' ';
    }
  }
  return stringResult;
}
