const read = require('./read')
const create =require('./add');
const remove = require('./delete');
const modify = require('./modify');

if(process.argv[2]==='read'){
  read();
}else if (process.argv[2]==='create'){
  create();
}else if (process.argv[2]==='delete'){
  remove();
}else if (process.argv[2]==='update'){
  modify();
}
