import React from 'react';
import ReactDOM from 'react-dom'

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ view: false })
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    const event = e.target.className
    if (event === 'check' || event === 'columnShade') {
      this.setState({ view: true })
    }else if (event === 'fas fa-bars'){
      this.setState({view: false})
    }
  }

  revealSlider() {
    if (this.state.view) {
      return "container hidden"
    }
  }

  revealHamburger(){
    if(this.state.view){
      return "fas fa-bars"
    }else{
      return "fas"
    }
  }

  render() {
    return (
      <div className="outter" onClick={this.changeView}>
        <i className={this.revealHamburger()} ></i>
        <div className={this.revealSlider()}>
          <div className="row">
            <div className="columnHamburger">
              <ul>
                <li><h2 className="check">Menu</h2></li>
                <li><h3 className="check">About</h3></li>
                <li><h3 className="check">Get Started</h3></li>
                <li><h3 className="check">Sign In</h3></li>
              </ul>
            </div>
            <div className="columnShade"></div>
          </div>
        </div>
      </div>
    );
  }
}
