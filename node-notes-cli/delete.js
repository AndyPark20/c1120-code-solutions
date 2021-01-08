const fs=require('fs')
const dataObject =require('./data.json');
const userInput =process.argv[3];



const remove =()=>{
  if (parseInt(process.argv[3]) === ((dataObject.nextId) - 1)) {
    delete dataObject.notes[userInput];
    dataObject.nextId--;
  } else {
    delete dataObject.notes[userInput];
  }
  fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
  })

}

module.exports = remove;
