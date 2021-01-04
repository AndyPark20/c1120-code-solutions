
let count = 3;
let interval =null;

interval = setInterval(function(){
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }else{
    console.log(count);
    count--;
  }
},1000)
