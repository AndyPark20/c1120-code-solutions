import React from 'react'
import ReactDOM  from 'react-dom'

const h1=React.createElement('h1',null,'Hello,React!')
const root = document.querySelector('#root')
console.log('value',h1);
ReactDOM.render(h1,root)
