import React from 'react';
import ReactDOM from 'react-dom';

console.log('helloztz')

export default class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state=({view:false})
    this.lightFlick = this.lightFlick.bind(this);
  }
  lightFlick(){
    const status=this.state.view;
    if(status){
      return this.setState({view:false})
    }else{
      return this.setState({view:true})
    }

  }

  switchToggle(){
    const status = this.state.view;
    if(status){
      return "toggleOn"
    }else{
      return "toggleOff"
    }
  }

  switchShellColor(){
    const status=this.state.view;
    const style="shell "
    if(status){
      return style+="on";
    }else{
      return style+="off";
    }
  }

  switchStatusName(){
    const status=this.state.view;
    if(status){
      return "ON";
    }else {
      return "OFF";
    }
  }

  switchBackground(){
    const status =this.state.view;
    if(status){
      return "container backgroundOn "
    }else{
      return "container backgroundOff";
    }
  }

  render(){
    return(
      <div className={this.switchBackground()}>
        <div className={this.switchShellColor()}>
        <button className={this.switchToggle()} onClick={this.lightFlick}>{this.switchStatusName()}</button>
        </div>
      </div>
    );
  }
}
