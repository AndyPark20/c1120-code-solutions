
const fs= require('fs');
const userInput =process.argv;
const text =[];


for (let i=2; i<userInput.length;i++){
  fs.readFile(userInput[i],'utf8',(err,data)=>{
    if(err){
      console.log(err)
    }else if(data){
      text.unshift(data);
      console.log(text);
    }
  })
}
