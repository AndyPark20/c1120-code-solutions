import React from 'react';
import ReactDOM from 'react-dom';

// export default class NewsletterForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state=({value:''})
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value:event.target.value})
//   }

//   handleSubmit(event){
//     console.log("State value:", this.state)
//     event.preventDefault()
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>Email:
//         <input type="email" value={this.state.value} onChange={this.handleChange} required></input>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }



// ReactDOM.render(<NewsletterForm />, document.querySelector('#root'))

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: '', valueTwo: 'BMW' })
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target
    let value=''
    if(event.target.type==='username'){
      const value =
    }
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ value: event.target.valueTwo })
  }


  render() {
    return (
      <form>
        <label>Username
        <input name="username" type="input" value={this.state.value}></input>
        </label>
        <div>
          <label for="car">CAR</label>
          <select id="car" value={this.state.valueTwo} type="dropDown" name="car">
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Lexus">Lexus</option>
          </select>
        </div>
        <button type="submit">SUBMIT</button>
      </form >
    );
  }
}


ReactDOM.render(<Submission />, document.querySelector('#root'))
