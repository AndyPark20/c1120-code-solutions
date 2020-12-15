

var $buttonClick=document.querySelector('.click-button');
var $buttonHover=document.querySelector('.hover-button');
var $buttonDblClick=document.querySelector('.double-click-button');


function handleClick(event) {
  console.log('button clicked');
  console.log('the value of the event:', event);
  console.log('the value of target property:', event.target);
}

$buttonClick.addEventListener('click',handleClick);


function handleMouseover(event) {
  console.log('mouse hovered');
  console.log('the value of the event:', event);
  console.log('the value of the target property:', event.target);
}

$buttonHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('the value of the event:', event);
  console.log('the value of the target property:', event.target)
}

$buttonDblClick.addEventListener('dblclick', handleDoubleClick);
