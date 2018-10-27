import React from "react";

const Home = (props) => (
  <div>
    <h1>Simply Survey</h1>
    <button onClick={() => props.swapComp('Create')}>Create Survey</button>
    <button onClick={() => props.swapComp('ViewSurveys')}>View Surveys</button>
  </div>
)


export default Home;