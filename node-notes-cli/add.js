
const fs = require('fs');
const userInput = process.argv[3];
const dataObject = require('./data.json');

const create = () => {
  dataObject.notes[dataObject.nextId] = userInput;
  dataObject.nextId++
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), (err) => {
    if (err) {
      console.log(err)
    }
  })
}

module.exports = create;
