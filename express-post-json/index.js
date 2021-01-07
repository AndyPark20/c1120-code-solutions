const express = require('express');
const app =express();
const jsonInitial =express.json();
let nextId=1;
const grades={};
let array=[];

app.use(jsonInitial)

app.get('/api/grades',(req,res,next)=>{
  res.json(array);
})

app.post('/api/grades',(req,res)=>{
  let object =req.body;
  object.id= nextId++;
  array.push(object)
  res.status(201).send(req.body);
});

app.listen(3000,()=>{
  console.log('Port 3000 is ACTIVE!')
})
