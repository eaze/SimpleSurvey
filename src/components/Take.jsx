import React from "react";
import Question from "./Question.jsx";

class Take extends React.Component{
  constructor(props){
    super(props);

    this.surveyNum = parseInt(props.state.currSurvey);
    this.surveySubject = props.state.surveys[this.surveyNum].subject;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let array = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (let i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
    }
    
    const questions = this.props.state.surveys[this.surveyNum].questions;
    
    for (let i = 0; i < questions.length; i++) {
      if (array[i] === 'true') {
        questions[i].True += 1;
      } else {
        questions[i].False += 1;
      }

      let output = this.props.state.surveys;
      output[this.surveyNum].questions = questions;

      fetch('/createSurvey', {
        method: 'POST',
        body: JSON.stringify(output),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
        console.log('Success:',res);
        this.props.swapComp('Results', this.props.state.currSurvey, output);
      })
    .catch(err => console.error('Error:', err));
    }
  }

  render() {
    return (
      <div>
        <h3>{ this.surveySubject }</h3>
        <form onSubmit={this.handleSubmit}>
          {this.props.state.surveys[this.surveyNum].questions.map((question, i) => {
            return <Question questionNum={i} question={question} />
          })}
          <input type='submit' value='Submit' />
        </form>
        <button onClick={() => this.props.swapComp('Home')}>Home</button>
      </div>
    )
  }
} 

export default Take;

