var $list = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users');
xhr.responseType ='json';
xhr.addEventListener('load', function(){
  console.log('status update:', xhr.status);
  console.log('response object:', xhr.response);
  for (var i=0; i<xhr.response.length;i++){
    var $listElement =document.createElement('li');
    $listElement.textContent=xhr.response[i].name;
    $list.appendChild($listElement);
  }
})
xhr.send();
