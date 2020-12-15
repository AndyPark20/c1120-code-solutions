

$switchButton = document.querySelector('.toggle')
$backgroundSwitch=document.querySelector('div.container');
$lightBulb=document.querySelector('div.toggle');
var currentState = false;

$switchButton.addEventListener('click', function(){

  if (currentState===false){
    $backgroundSwitch.className="container switchOn";
    $lightBulb.className ="toggle buttonOn";
    currentState=true;

  }else if (currentState===true){
    $backgroundSwitch.className = "container switchOff";
    $lightBulb.className = "toggle buttonOff";
    currentState = false;
  }


});
