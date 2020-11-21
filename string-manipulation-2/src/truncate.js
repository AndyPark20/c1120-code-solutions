/* exported truncate */

function truncate(length, string) {
  var slice = string.slice(0, length);
  var result = slice + '...'
  return result;
}
