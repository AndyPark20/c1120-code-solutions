/* exported getWords */

function getWords(string) {

  var result = string.split(' ');
  var array = [];

  for (var i = 0; i <result.length; i++){
    if (result[i] === ''){
      return [];
    }else{
      array.push(result[i]);
    }
  }
  return array;

}
