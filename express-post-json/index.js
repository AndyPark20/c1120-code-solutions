const express = require('express');
const app =express();
const jsonInitial =express.json();
let nextId=1;
let grades={};


app.use(jsonInitial)

app.get('/api/grades',(req,res,next)=>{
  let array = [];
  array.push(grades);
  res.json(array);
})

app.post('/api/grades',(req,res)=>{
  grades =req.body;
  grades.id= nextId++;
  res.status(201).send(grades)
});

app.listen(3000,()=>{
  console.log('Port 3000 is ACTIVE!')
})
