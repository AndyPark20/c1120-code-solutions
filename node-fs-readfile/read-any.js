

const fs= require('fs');
const argument = process.argv[2];

fs.readFile(argument,"utf8",(err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
