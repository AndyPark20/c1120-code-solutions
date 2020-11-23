
var numberClicked=0;
$hotBtn=document.querySelector('.hot-button');
$clickCount=document.querySelector('.click-count');


$hotBtn.addEventListener('click', function(){
  numberClicked+=1;
  $clickCount.textContent="Clicks:" + numberClicked;

  if(numberClicked <4){
    $hotBtn.className="hot-button cold";
  }else if (numberClicked <7){
    $hotBtn.className ="hot-button cool";
  }else if (numberClicked <10){
    $hotBtn.className ="hot-button tepid";
  }else if (numberClicked<13){
    $hotBtn.className ="hot-button warm";
  }else if (numberClicked<16){
    $hotBtn.className ="hot-button hot";
  }else{
    $hotBtn.className ="hot-button nuclear";
  }

});
