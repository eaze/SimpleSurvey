import React from "react";

const Answer = (props) => (
  <div>
    <h5>{props.question.question}</h5>
    <label>True: </label>{props.question.True}
    <br/>
    <label>False: </label>{props.question.False}
  </div>
)


export default Answer;