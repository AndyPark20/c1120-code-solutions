var carInfo ={
  year:0,
  make:'',
  model:'',
  service:[]
};

var getData =localStorage.getItem('car')
if(getData!==null){
  carInfo =JSON.parse(getData);
}

window.addEventListener('beforeunload', function(){

 var stringify = JSON.stringify(carInfo);
 localStorage.setItem('car', stringify);

})
