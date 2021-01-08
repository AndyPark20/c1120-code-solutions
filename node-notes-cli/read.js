
const fs = require('fs');
let object;


const read =() =>{
fs.readFile('data.json','utf8',(err,data)=>{
  if(err){
    console.log(err)
  }else if(data){
    object= JSON.parse(data);
    const main =object.notes;
    for (const property in main){
      console.log(`${property}: ${main[property]}`)
    }
  }
})
}

module.exports =read;
