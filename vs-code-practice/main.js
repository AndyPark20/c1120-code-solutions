
var $image = document.querySelector('img');
var $insertImage = document.querySelector('.column');
var $sliderOne = document.querySelector('.one');
var $sliderTwo = document.querySelector('.two');
var $sliderThree = document.querySelector('.three');
var imageArray = ['M-Motor.png', 'AMG-Logo.jpg', 'RS-Audi.jpg']
var i = 1;



setInterval(function () {


  $image.setAttribute('src', imageArray[i]);
  $insertImage.appendChild($image);
  i++;
  if (i === 3) {
    i = 0;
  }

}, 3000)



function swapSlides(idValue) {

  if (idValue === 'one') {
    $image.setAttribute('src', imageArray[i - 1]);
    $sliderOne.classList.add('selected');
    $sliderTwo.classList.remove('selected');
    $sliderThree.classList.remove('selected');
    i = 0;
    console.log(i)
  } else if (idValue === 'two') {
    $image.setAttribute('src', imageArray[i]);
    $sliderOne.classList.remove('selected');
    $sliderTwo.classList.add('selected');
    $sliderThree.classList.remove('selected');
    i=1;
    console.log(i);
  } else if (idValue === 'three') {
    $image.setAttribute('src', imageArray[i+1]);
    $sliderOne.classList.remove('selected');
    $sliderTwo.classList.remove('selected');
    $sliderThree.classList.add('selected');
    i=2;
    console.log(i);

}

}




  document.addEventListener('click', function(e) {

    swapSlides(e.target.getAttribute('id'));

  })
