

const plus = require('./add');
const minus = require('./subtract');
const over = require('./divide');
const times = require('./multiply');



if (process.argv[3]==='plus'){
  console.log('Result:',plus(parseInt(process.argv[2]), parseInt(process.argv[4])));
}else if (process.argv[3] === 'minus'){
  console.log('Result:', minus(parseInt(process.argv[2]), parseInt(process.argv[4])));
}else if (process.argv[3]==='over'){
  console.log('Result:', over(parseInt(process.argv[2]), parseInt(process.argv[4])));
}else if(process.argv[3]==='times'){
  console.log('Result:', times(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
