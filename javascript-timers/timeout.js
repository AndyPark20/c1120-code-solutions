
var setTimeOutId=setTimeout(greetings,2000)


function greetings(){
  var $header = document.querySelector('h1')
  $header.textContent = 'Hello There'
  return $header;
}
