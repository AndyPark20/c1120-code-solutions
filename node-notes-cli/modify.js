const fs = require('fs');
const dataObject =require('./data.json');
const userInput =process.argv[3];
const userModify =process.argv[4]


const modify =()=>{
  dataObject.notes[userInput] = userModify;
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
  })
}

module.exports=modify;
