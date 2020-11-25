

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');
var $submit = document.querySelector('#contact-form');
var messageData = {};


$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

$submit.addEventListener('submit', inputSubmit);


function handleFocus(event) {
  console.log('focus');
  console.log('value of name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log('value of name:', event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ':', event.target.value);

}

function inputSubmit(event) {

  event.preventDefault();
  messageData.name = $submit[0].value;
  messageData.email=$submit[1].value;
  messageData.message=$submit[2].value;
  console.log(messageData);

  $submit.reset();

}
