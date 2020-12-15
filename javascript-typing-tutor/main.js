
$keyCharacter = document.querySelectorAll('span');
$modalWindow=document.querySelector('.row-modal')
$typingAccuracy=document.querySelector('.result');
$playAgainYes=document.querySelector('.yes');
var index = 0;
var correctCount=0;


document.addEventListener('keydown', checkCharacters);
$playAgainYes.addEventListener('click', exitToPlay);



function checkCharacters(e) {

  var accuracy = ((correctCount / ($keyCharacter.length-1))*100);
  var decimalCorrection=accuracy.toFixed(2)

  if ($keyCharacter[index].textContent === e.key && index<29) {
    $keyCharacter[index].classList.remove('incorrectLetter');
    $keyCharacter[index].classList.add('correctLetter');
    $keyCharacter[index].classList.remove('currentChar');
    $keyCharacter[index + 1].classList.add('currentChar');
    index++;
    correctCount+=1;
    console.log(correctCount);
  } else if ($keyCharacter[index].textContent !== e.key) {
    $keyCharacter[index].classList.add('incorrectLetter');
    correctCount-=1;
  }

  if ($keyCharacter[index].textContent === e.key && index === 29) {
    $keyCharacter[index].classList.remove('incorrectLetter');
    $keyCharacter[index].classList.add('correctLetter');
    $keyCharacter[index].classList.remove('currentChar');
    $typingAccuracy.textContent="Your typing accuracy result is: " + decimalCorrection+"%";
    $modalWindow.classList.remove('hidden');
  }
}

function exitToPlay(){

  $modalWindow.classList.add('hidden');
  location.reload();
}
