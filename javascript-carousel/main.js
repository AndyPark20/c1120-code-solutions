var images = ["images/025.png", "images/039.png", "images/007.png", "images/004.png", "images/001.png"];
var $dotLocation = document.querySelectorAll('.fa-circle')
var $image = document.querySelector('img');
var $arrowRight = document.querySelector('.fa-chevron-right');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $container = document.querySelector('.container');
var intervalId = null;
var imageCounter = 0;

function autoRotate() {
  $dotLocation[imageCounter].classList.remove('fas');
  $dotLocation[imageCounter].classList.add('far');
  imageCounter++;

  if (imageCounter === 5) {
    imageCounter = 0;
    $image.setAttribute('src', images[imageCounter]);
    $dotLocation[imageCounter].classList.add('fas');
  }else {
    $dotLocation[imageCounter].classList.add('fas');
    $image.setAttribute('src', images[imageCounter]);
  }

  return $image;
}

intervalId = setInterval(autoRotate, 3000)

$container.addEventListener('click', function (e) {
  var dataViewInt = e.target.getAttribute('data-view')
  if (e.target.className === 'fas fa-chevron-right') {
    clearInterval(intervalId);
    $dotLocation[imageCounter].classList.remove('fas');
    $dotLocation[imageCounter].classList.add('far');
    $image.setAttribute('src', images[imageCounter + 1]);
    imageCounter++;
    if (imageCounter === 5) {
      imageCounter = 0;
      $image.setAttribute('src', images[imageCounter]);
      $dotLocation[imageCounter].classList.add('fas');
    }
    $dotLocation[imageCounter].classList.add('fas');
    intervalId = setInterval(autoRotate, 3000)
  } else if (e.target.className === 'fas fa-chevron-left') {
    clearInterval(intervalId);
    $dotLocation[imageCounter].classList.remove('fas');
    $dotLocation[imageCounter].classList.add('far');
    imageCounter--;
    if (imageCounter === -1) {
      imageCounter = 4;
      $image.setAttribute('src', images[imageCounter]);
      $dotLocation[imageCounter].classList.add('fas');
    }
    $dotLocation[imageCounter].classList.add('fas');
    $image.setAttribute('src', images[imageCounter]);
    intervalId = setInterval(autoRotate, 3000)

  } else if (dataViewInt === dataViewInt && dataViewInt !==null) {
    clearInterval(intervalId);
    var numberConvert = parseInt(dataViewInt);
    imageCounter = numberConvert;
    $image.setAttribute('src', images[numberConvert]);
    for (var dotCounter = 0; dotCounter < $dotLocation.length; dotCounter++) {
      $dotLocation[dotCounter].classList.remove('fas');
      $dotLocation[dotCounter].classList.add('far');
    }
    $dotLocation[imageCounter].classList.add('fas');
    intervalId = setInterval(autoRotate, 3000)

  }

})
