

var number = 4;
var intervalId =setInterval(countDown,1000)

function countDown(){
  number--;
  $header =document.querySelector('h1');
  $header.textContent = number;


  if (number === 0) {
    $header.textContent = '~Earth Beeeeelooowww Us~'
    clearInterval(intervalId);
  }

}
