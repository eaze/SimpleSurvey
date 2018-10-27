import React from "react";

class View extends React.Component {
  constructor(props){
    super(props);

    this.takeSurvey = this.takeSurvey.bind(this);
  }

  takeSurvey(event) {
    this.props.swapComp('Take', event.target.name);
  }

  render() {
    let output = [];
    let surveys = this.props.surveys;
    
    surveys.forEach((elem, i) => {
      output.push(<input type="button" key={'key_' + i} name={i} onClick={this.takeSurvey} value={elem.subject}/>)
    })
    return (
       <div> 
        <h1>Surveys</h1>
        { output }
        <br/>
        <button onClick={() => this.props.swapComp('Home')}>Home</button>
      </div>
    )
  }
}


export default View;