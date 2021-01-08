const express = require('express');
const fs = require('fs')
const app = express();
const data = require('./data.json');
const JsonMiddleWare =express.json();
let nextIds = data.nextId;
let object = {};

//Json middleware
app.use(JsonMiddleWare);

//get request to pull all notes
app.get('/api/notes', (req, res, next) => {
  let array = [];
  const dataNotes = data.notes;
  for (const prop in dataNotes) {
    array.push(dataNotes[prop])
  }
  res.status(200).json(array);
})


//get request to pull specific notes based on Id number
app.get('/api/notes/:id', (req, res, next) => {
  const dataNotes = data.notes;
  const inputNumber = parseInt(req.params.id, 10);

  if (inputNumber !== Math.abs(inputNumber)) {
    res.status(400).json(`Error: Sorry, but the ID needs to be a positive integer`)
  } else if (inputNumber === Math.abs(inputNumber)) {
    if (dataNotes[inputNumber]) {
      res.status(200).json(dataNotes[inputNumber])
    } else {
      res.status(404).json(`Error: Sorry, no matching ID# ${inputNumber} found!`)
    }
  }
})

// post request to create a new note
app.post('/api/notes', (req, res, next) => {
  object[nextIds].id = nextIds;
  object[nextIds]=req.body;
  data.notes= object;



  res.json(req.body)
  if(Object.entries(req.body).length===0){
    res.status(400).json(`Error: Please fill out the required field!`)
  }else if (req.body !=={}){
    fs.writeFile('data.json',JSON.stringify(data,null,2),(err)=>{
      if(err){
        console.log(err);
      }
    })
  }

})

//listen for a call on port 3000
app.listen(3000, () => {
  console.log('Port 3000 activated!')
})
