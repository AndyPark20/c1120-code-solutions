import React from 'react';
import ReactDOM from 'react-dom';


console.log('FINALZEDEDZZZrf')
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = ({ counter: 0 })
  }

  handleChange(event) {
    const name = event.target.className
    const iconClick = parseInt(event.target.getAttribute('id'))
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
      if (this.state.counter === this.props.pokemon.length) {
        this.setState({ counter: 0 })
      }
    }, 3000)
    if (name === 'fas fa-chevron-right') {
      if (this.state.counter === this.props.pokemon.length - 1) {
        this.setState({ counter: 0 })
      } else {
        this.setState({ counter: this.state.counter + 1 })
      }
    } else if (name === 'fas fa-chevron-left') {
      if (this.state.counter === 0) {
        this.setState({ counter: this.props.pokemon.length - 1 })
      } else {
        this.setState({ counter: this.state.counter - 1 })
      }
    }

    if (iconClick === iconClick) {
      this.setState({ counter: iconClick })
    }
  }

  circleChange() {
    const circle = this.props.dotId.map(values => {
      let message = ''
      if (this.state.counter === values.id) {
        message = "fas fa-circle"
      } else {
        message = "far fa-circle"
      }
      return <i key={values.id} className={message} id={values.id}></i>
    })
    return circle;
  }

  pictureChange() {
    const picture = this.props.pokemon[this.state.counter]
    return (<img src={picture} alt="pokemon" />)
  }

  render() {
    return (
      <div className="container" onClick={this.handleChange}>
        <div className="row">
          <i class="fas fa-chevron-left"></i>
          <div className="column">
            {this.pictureChange()}
            <div className="circle">
              {this.circleChange()}
            </div>
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
