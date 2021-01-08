const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./data.json');
const JsonMiddleWare = express.json();

//Json middleware
app.use(JsonMiddleWare);

//get request to pull all notes
app.get('/api/notes', (req, res, next) => {
  let array = [];
  const dataNotes = data.notes;
  for (const prop in dataNotes) {
    array.push(dataNotes[prop])
  }
  return(res.status(200).json(array));
})


//get request to pull specific notes based on Id number
app.get('/api/notes/:id', (req, res, next) => {
  const dataNotes = data.notes;
  const inputNumber = parseInt(req.params.id, 10);

  if (inputNumber !== Math.abs(inputNumber)) {
    res.status(400).json(`Error: Sorry, but the ID needs to be a positive integer`)
  } else {
    if (dataNotes[inputNumber]) {
      return(res.status(200).json(dataNotes[inputNumber]))
    } else {
      return(res.status(404).json(`Error: Sorry, no matching ID# ${inputNumber} found!`))
    }
  }
})

// post request to create a new note
app.post('/api/notes', (req, res, next) => {
  if (!req.body.content) {
    return(res.status(400).json(`Error: Please fill out the required field!`))
  } else if (req.body.content) {
    let nextIds = data.nextId++;
    data.notes[nextIds] = req.body;
    data.notes[nextIds].id = nextIds;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        return(res.status(500).json(`Error: Ooops something went wrong, please try again!`))
      } else {
        return(res.status(201).json(data.notes[nextIds]));
      }
    })
  }
})

//Delete request and delete note by ID
app.delete('/api/notes/:id', (req, res, next) => {
  const dataNotes = data.notes
  const userNum = parseInt(req.params.id, 10);

  if (userNum !== Math.abs(userNum)) {
    return(res.status(400).json(`Error: Sorry, but the ID needs to be a positive integer`))
  } else if (!dataNotes[userNum]) {
    return(res.status(404).json(`Error: Sorry, no matching ID# ${userNum} found!`))
  } else {
    delete data.notes[userNum];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        return(res.status(500).json('Error: Ooops something went wrong, please try again!'))
      } else {
        return(res.status(204).end());
      }
    })
  }
})

//Put request and replace note by ID
app.put('/api/notes/:id', (req, res) => {
  const userNum = parseInt(req.params.id, 10);

  if (userNum !== Math.abs(userNum)){
    return(res.status(400).json(`Error: Sorry, but the ID needs to be a positive integer`))
  } else if (!req.body.content) {
    return(res.status(400).json(`Error: Please fill out the required field`))
  }

  if (!data.notes[userNum]) {
    return(res.status(404).json(`Error: Sorry, no matching ID# ${userNum} found!`))
  } else {
    data.notes[userNum] = req.body;
    data.notes[userNum].id = userNum;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        return(res.status(500).json('Error: Ooops something went wrong, please try again!'))
      } else {
        return(res.status(200).json(data.notes[userNum]))
      }
    })
  }
})


//listen for a call on port 3000
app.listen(3000, () => {
  console.log('Port 3000 activated!')
})
