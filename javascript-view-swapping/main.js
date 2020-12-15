var $mainTab = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');



function matchViewSlide(e) {
  var $dataView = e.target.getAttribute('data-view');

  if (e.target.matches('.tab') === true) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === e.target) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }
  }
  if (e.target.matches('.tab') === true) {
    for (var j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === $dataView) {
        $view[j].classList.remove('hidden');
      } else {
        $view[j].classList.add('hidden');
      }
    }
  }
}


$mainTab.addEventListener('click', matchViewSlide)
