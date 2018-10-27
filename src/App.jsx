import React from "react";
import Home from "./components/Home.jsx";
import View from "./components/View.jsx";
import Take from "./components/Take.jsx";
import Create from "./components/Create.jsx";
import Results from "./components/Results.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Home",
      surveys: [],
      currSurvey: 0
    }
    this.swapComp = this.swapComp.bind(this);
  }

  componentDidMount() {
    //fetch all serveys when mounted
    fetch('/surveys', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => this.setState({ surveys: JSON.parse(res) }))
    .catch(err => console.error('Error:', err));
  }

  swapComp(newView, surveyNum, surveys=this.state.surveys) {
    this.setState({
      view: newView,
      currSurvey: surveyNum,
      surveys: surveys
    })
  }

  viewController(surveyNum) {
    switch(this.state.view) {
      case 'Home':
        return <Home swapComp={this.swapComp}/>
      case 'Create':
        return <Create swapComp={this.swapComp} surveys={this.state.surveys}/>
      case 'ViewSurveys':
        return <View swapComp={this.swapComp} surveys={this.state.surveys}/>
      case 'Take':
        return <Take swapComp={this.swapComp} state={this.state}/>
      case 'Results':
        return <Results swapComp={this.swapComp} state={this.state}/> 
      default:
        return <Home swapComp={this.swapComp}/>
    }
  }

  render() {
    return (
      <div id="app-container">
        { this.viewController() }
      </div>
    );
  }
}

export default App;
