import React from "react";

const Question = (props) => (
  <div>
    <h5 id={props.questionNum} >{props.question.question}</h5>
    <label>True: </label>
    <input type="checkbox" value={true}/>
    <br/>
    <label>False: </label>
    <input type="checkbox" value={false}/>
  </div>
)


export default Question;