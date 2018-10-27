import React from "react";

class Create extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      val: '',
      subject: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.finishCreation = this.finishCreation.bind(this);
  }

  handleChange(event) {
    this.setState({val: event.target.value})
  }

  handleSubject(event) {
    this.setState({subject: event.target.value})
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const questions = this.state.questions;
    if (this.state.val) {
      questions.push(this.state.val);
      this.setState({ questions: questions })
    }
    
    // reset text input back to empty
    this.setState({val: ''});
  }

  finishCreation() {
    let survey = {
      subject: this.state.subject,
      questions: []
    }

    this.state.questions.forEach(question => {
      survey.questions.push({
        question: question,
        True: 0,
        False: 0
      })
    })

    let output = this.props.surveys;
    output.push(survey);

    fetch('/createSurvey', {
      method: 'POST',
      body: JSON.stringify(output),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      console.log('Success:',res);
      this.props.swapComp('Home');
    })
    .catch(err => console.error('Error:', err));
  }

  render() {
    const confirmedQuestions = [];
    for (let i = 0; i < this.state.questions.length; i++) {
      confirmedQuestions.push(<p>{this.state.questions[i]}</p>);
    }
    return (
      <div>
        <h1>Create Survey</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Survey Name: </label>
          <input type="text" value={this.state.subject} onChange={this.handleSubject} />
          <br/>
          <label>New Question: </label>
          <input type="text" value={this.state.val} onChange={this.handleChange} />
          <br/>
          <input type='submit' value='Add Questions' />
        </form>
        <br/>
        <h2>Survey Name</h2>
        { this.state.subject }
        <h3>Survey Questions</h3>
        { confirmedQuestions }
        <button onClick={() => this.finishCreation()}>Create Survey</button>
        <button onClick={() => this.props.swapComp('Home')}>Home</button>

      </div>
    )
  }
}

export default Create;
