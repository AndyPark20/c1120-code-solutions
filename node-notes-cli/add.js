
const fs = require('fs');
const userInput = process.argv;

fs.writeFile('./data.json','helllo',(err)=>{
  if(err){
    console.log(err)
  }

})
