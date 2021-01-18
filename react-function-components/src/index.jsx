import React from 'react'
import ReactDOM from 'react-dom'

// function CustomButton(){
//   return <button>"Click Me!</button>
// }

// const element =<CustomButton />
// ReactDOM.render(element,document.querySelector('#root'))

class CustomButton extends React.Component {
  render(){
    return <button>"Click Me!</button>
  }
}

const element =<CustomButton />
ReactDOM.render(element,document.querySelector('#root'))
