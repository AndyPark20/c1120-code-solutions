import React from 'react';
import ReactDOM  from 'react-dom';

class CustomButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {isClicked:false};
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  handleClick(){
    this.setState({isClicked:true})
  }

  handleClickOff(){
    this.setState({isClicked:false});
  }

  checkPoint(){
  const isClicked = this.state.isClicked
  console.log('result', isClicked)
  if (isClicked) {
    return <button onClick={this.handleClickOff}>Activated!</button>
  } else {
    return <button onClick={this.handleClick}>Deactivated!</button>
  }
}

  render(){
    return this.checkPoint();
  }
}

ReactDOM.render(<CustomButton />,document.querySelector('#root'))
