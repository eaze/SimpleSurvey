import React from "react";
import Answer from "./Answer.jsx";

class Results extends React.Component{
  constructor(props){
    super(props);

    this.surveyNum = parseInt(props.state.currSurvey);
    this.surveySubject = props.state.surveys[this.surveyNum].subject;
  }

  render() {
    return (
      <div>
        <h3>{ this.surveySubject }</h3>
          {this.props.state.surveys[this.surveyNum].questions.map((question, i) => {
            return <Answer question={question} />
          })}
        <button onClick={() => this.props.swapComp('Home')}>Home</button>
      </div>
    )
  }
} 

export default Results;

