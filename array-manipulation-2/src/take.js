/* exported take */
function take (array, count) {
  var newArray =[];

  for (var i=0; i<array.length; i++){
    if(array[i]===undefined){
      return [];
    }else if( i<count) {
      newArray.push(array[i])
    }
  }
  return newArray;
}
