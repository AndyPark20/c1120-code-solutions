import React from 'react';
import ReactDOM from 'react-dom';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ clickCount: 0 })
    this.countIncrement = this.countIncrement.bind(this)
  }

  countIncrement() {
    this.setState({ clickCount: this.state.clickCount + 1 })
  }

  buttonStatus() {
    const count = this.state.clickCount
    console.log('buttonStatus', count)
    let style = "sizing "
    if (count <= 3) {
      return style += "three";
    } else if (count <= 6) {
      return style += "six";
    } else if (count <= 9) {
      return style += "nine";
    } else if (count <= 12) {
      return style += "twelve";
    } else if (count <= 15) {
      return style += "fifteen";
    } else if (count <= 18) {
      return style += "eighteen";
    }else{
      return style+= "eighteen";
    }
  }

  render() {
    return (
      <div className="center">
        <button className={this.buttonStatus()} onClick={this.countIncrement}>HOT BUTTON</button>
      </div>
    );
  }
}
