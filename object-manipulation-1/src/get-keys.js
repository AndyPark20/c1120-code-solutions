/* exported getKeys */
function getKeys(object){
   var arrayResult =[];
   for (var keys in object){
     arrayResult.push(keys)
   }
   return arrayResult;
}
