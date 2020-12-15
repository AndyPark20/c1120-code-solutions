/* exported oddOrEven */

function oddOrEven(numbers){
  var newArray=[];
  for(var i=0; i<numbers.length;i++){
    if (numbers[i] % 2 ===1){
      newArray.push('odd')
    }else if (numbers[i] % 2 ===0){
      newArray.push('even')
    }
  }
  return newArray;
}
