

var $submit = document.querySelector('#contact-form');
var messageData = {};

$submit.addEventListener('submit', inputSubmit);

function inputSubmit(event) {

  event.preventDefault();
  messageData.name = $submit[0].value;
  messageData.email = $submit[1].value;
  messageData.message = $submit[2].value;
  console.log("messageData value:", messageData);

  $submit.reset();

}
