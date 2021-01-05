const fs = require('fs');

fs.writeFile('random.txt', Math.random(),(err)=>{
  if (err){
    console.log(err);
  }
})
