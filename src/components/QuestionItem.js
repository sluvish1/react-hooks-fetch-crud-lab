import React from "react";

function QuestionItem({ question, onDeletedQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

//console.log(question)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


//i think im suppost to filter though the question and return all the questions that were not removed when the button is clicked.
  function handelDelete() {
    //console.log(question)
      fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE", //When deleteing an object you dont need to include the body and header in the fetch since we don't have any additional data to send besides the ID
  })
    .then((r) => r.json())
    .then(() => onDeletedQuestion(question));
 }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button className="delete" onClick={handelDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
