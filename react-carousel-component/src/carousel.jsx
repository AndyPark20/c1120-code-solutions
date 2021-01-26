import React from 'react';
import ReactDOM from 'react-dom';


export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
    this.handlePreviousImage = this.handlePreviousImage.bind(this)
    this.handleNextImage = this.handleNextImage.bind(this)
    this.circleClick =this.circleClick.bind(this)
  }

  handlePreviousImage() {
    if (this.state.counter === 0) {
      this.setState({ counter: this.props.pokemon.length - 1 })
    } else {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  handleNextImage() {
    if (this.state.counter === this.props.pokemon.length - 1) {
      this.setState({ counter: 0 })
    } else {
      this.setState({ counter: this.state.counter + 1 })
    }
  }


  circleChange() {
    const circle = this.props.pokemon.map((values,index) => {
      let message =''
        if(index === this.state.counter){
          message ="fas fa-circle"
        }else{
          message ="far fa-circle"
        }
        return <i key={index} className={message} id={index}></i>
    })
    return circle;
  }

  circleClick(event){
    const idNumber= parseInt(event.target.id)
    if(typeof idNumber ==='number'){
      this.setState({counter:idNumber})
    }
  }

  pictureChange() {
    const picture = this.props.pokemon[this.state.counter]
    return <img src={picture} alt="pokemon" />
  }

  componentDidMount() {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
      if (this.state.counter === this.props.pokemon.length) {
        this.setState({ counter: 0 })
      }
    }, 3000)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <i class="fas fa-chevron-left font-size-arrows" onClick={this.handlePreviousImage}></i>
          <div className="column">
            {this.pictureChange()}
            <div className="circle" onClick={this.circleClick}>
              {this.circleChange()}
            </div>
          </div>
          <i class="fas fa-chevron-right font-size-arrows" onClick={this.handleNextImage}></i>
        </div>
      </div>
    );
  }
}
