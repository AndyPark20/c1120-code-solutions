const express= require('express')
const path =require('path')
const app = express()

const join =path.join(__dirname,'public')
const static = express.static('public')

app.use(static)

app.listen(3003, ()=>
console.log('port 3003 is activated')
)
