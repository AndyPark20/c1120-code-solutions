
const express = require('express');
const app =express();


app.use((req,res)=>{
  res.send('This is just the beginning!');
})

app.listen(3000, ()=>{
  console.log('The Server is actively listening to port 3000')
})
