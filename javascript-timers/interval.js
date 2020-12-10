

var number = 4;
var intervalId =setInterval(countDown,1000)

function countDown(){
  var $header =document.querySelector('h1');
  number--;
  $header.textContent = number;


  if (number === 0) {
    $header.textContent = '~Earth Beeeeelooowww Us~'
    clearInterval(intervalId);
  }

}
