import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestion] = useState([])
  
 // console.log(questions)

useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestion(questions));
}, [])
  
  function handelDeleteQuestion(deletedQuestion) {
    let updateQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestion(updateQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul className="Questions">
       {questions.map((question) => (
         <QuestionItem key={question.id} question={question} onDeletedQuestion={handelDeleteQuestion} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
