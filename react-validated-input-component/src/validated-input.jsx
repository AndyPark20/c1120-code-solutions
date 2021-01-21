import React from 'react';
import ReactDOM from 'react-dom';


export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ passwordValue: '',passwordCheck:'' })
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({passwordValue: event.target.value })
    console.log("passwordValue:",this.state.passwordValue)
    const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#$%^&*()])[a-zA-Z0-9!?@#$%^&*()]{8,}")
    if(regex.test(event.target.value)){
      this.setState({passwordCheck:'Meets Password Requirement!'})
      return "fontRed";
    } else{
      this.setState({passwordCheck: 'Please include a digit, capital letter, and special character!'})
    }
  }

  statusChange(){
    const valueLength = this.state.passwordValue.length
    if(valueLength <1){
      return <h3 className="fontRed">A password is required.</h3>
    }else if (valueLength >=1 && valueLength <8){
      return <h3 className="fontRed">Your password is too short.</h3>
    }else if(valueLength>=8){
      return <h3></h3>
    }
  }
    symbolChange(){
      const valueLength = this.state.passwordValue.length
      if(!valueLength || valueLength<=7){
        return "fas fa-times";
      }else if(valueLength >=8){
        return "fas fa-check";
      }
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <label>Password:
              <div className="status">
                <input type="password" value={this.state.passwordValue} onChange={this.handleChange}></input>
                <i class={this.symbolChange()}></i>
              </div>
            </label>
          </div>
          <div className="reason">{this.statusChange()}</div>
          <div className="font">{this.state.passwordCheck}</div>
        </div>
      </div>
    );
  }
}
