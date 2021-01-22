import React from 'react';
import ReactDOM from 'react-dom';


console.log('test')
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state=({view:''});
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const selected =event.target.getAttribute('data-view')
      this.setState({view:selected})

      if(this.state.view === selected){
        this.setState({view:""})
      }
  }

  render() {
    return (
      <div className="container" onClick={this.handleChange}>
        <div className="row">
          {this.props.programming.map(values=>{
            let hide = ''
            if(this.state.view === values.id){
              hide ='';
            }else{
              hide ='hidden';
            }
            return (<div className="column">
            <h3 className="cursor" key={values.id} data-view={values.id}>{values.title}</h3>
            <h4 className={hide}>{values.information}</h4>
          </div>)})}
        </div>
      </div>
    );
  }
}
