import React from 'react';
import ReactDOM from 'react-dom';



export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ time: 0, actionButton: true });
    this.autoClock = this.autoClock.bind(this);
    this.screenClick = this.screenClick.bind(this);
  }

  screenClick() {
    console.log('registering!')
    if (this.state.actionButton)
      this.setState({ time: 0 })
  }

  autoClock() {
    const status = this.state.actionButton;
    if (status) {
      this.setState({ actionButton: false })
      this.intervalId = setInterval(() => {
        this.setState({ time: this.state.time + 1 })
      }, 1000)
    } else {
      clearInterval(this.intervalId);
      this.setState({ actionButton: true })
    }

  }

  playPauseBtn() {
    const status = this.state.actionButton;
    if (status) {
      return 'fas fa-play';
    } else {
      return 'fas fa-pause';
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="columnWatch">
            <div className="circle" onClick={this.screenClick}>{this.state.time}</div>
            <i className={this.playPauseBtn()} onClick={this.autoClock}></i>
          </div>
        </div>
      </div>
    );
  }
}
