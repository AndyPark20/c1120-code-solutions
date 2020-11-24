
$openModalBtn = document.querySelector('.openModal');
$openModalWindow = document.querySelector('.row-modal');
$closeModal =document.querySelector('.exitModal')


$openModalBtn.addEventListener('click', openModal);
$closeModal.addEventListener('click', closeModal);


function openModal(){
  $openModalWindow.classList.remove('visibility')
}

function closeModal(){
  $openModalWindow.classList.add('visibility');
}
