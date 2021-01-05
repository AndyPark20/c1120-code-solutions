
const fs = require('fs');
const textToCopy =process.argv[2];
const textToCreate= process.argv[3];


fs.readFile(textToCopy,'utf8', (err,data)=>{

  if(err){
    console.log(err)
  }else if(data){
    fs.writeFile(textToCreate, data + '\n','utf8', (err)=>{
      if(err){
        console.log(err);
      }
    })
  }

})
