
const fs = require('fs');
const userArray = process.argv;
let result ='';

for (let i=2; i<userArray.length;i++){
  fs.readFile(userArray[i],'utf8',(err, data)=>{
    if(err){
      console.log(err);
    }else if(data){
      console.log(result=data);
    }
  })
}
