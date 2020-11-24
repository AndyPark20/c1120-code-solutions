/* exported defaults */

function defaults(target, source) {

  for (var values in source){
    if (target[values]===undefined){
      target[values]=source[values]
    }
  }

}
