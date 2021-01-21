import React from 'react';
import ReactDOM from 'react-dom';


const topics = [{
  id:'html',
  title: 'Hypertext Markup Language',
  information: `Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
  It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript`
},
{
  id:'css',
  title: 'Cascading Style Sheets',
  information: `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
  CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. `
},
{
  id:'js',
  title: 'JavaScript',
  information: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.
JavaScript is high-level, often just-in-time compiled, and multi-paradigm.`
},
]

console.log('Will?')
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state=({view:'', doubleClick:0});
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(this.state)
    const selected =event.target.getAttribute('data-view')

    if (selected ==='html'){
      this.setState({view:selected, doubleClick:this.state.doubleClick+1})
    } else if (selected ==='css'){
      this.setState({ view: selected, doubleClick: this.state.doubleClick + 1})
    } else if (selected ==='js'){
      this.setState({ view: selected, doubleClick: this.state.doubleClick + 1})
    }

  }

  render() {
    return (
      <div className="container" onClick={this.handleChange}>
        <div className="row">
          {topics.map(values=>{
            let hide = ''
            if(this.state.view === values.id && this.state.doubleClick % 2 ===0){
              hide ='';
            }else if((this.state.view !==values.id) || (this.state.doubleClick % 2 ===1)) {
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
