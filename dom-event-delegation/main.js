
var $taskList =document.querySelector('.task-list');

$taskList.addEventListener('click', function(e){
  console.log("the value of event.target:", e.target);
  console.log("the value of event target name:", event.target.tagName);
  console.log('event target closest element:', e.target.closest('.task-list-item'))
  if(e.target.tagName ==="BUTTON"){
    e.target.closest('.task-list-item').remove();
  }
})
