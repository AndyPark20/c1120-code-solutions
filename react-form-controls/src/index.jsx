import React from 'react';
import ReactDOM  from 'react-dom';

export default class NewsletterForm extends React.Component{
  constructor(props){
    super(props);
    this.state=({value:''})
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value})
  }

  handleSubmit(event){
    console.log("State value:", this.state)
    event.preventDefault()
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Email:
        <input type="email" value={this.state.value} onChange={this.handleChange} required></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}



ReactDOM.render(<NewsletterForm />, document.querySelector('#root'))
