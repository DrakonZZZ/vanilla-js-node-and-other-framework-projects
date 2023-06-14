import { useState } from 'react';

const Questions = ({ title, info }: Question) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <>
      <div className="question-container">
        <div className="question">
          <h3>{title}</h3>
          <p>{showQuestion && info}</p>
        </div>
        <div className="btn-layout">
          <button onClick={() => setShowQuestion(!showQuestion)}>
            {showQuestion ? '-' : '+'}
          </button>
        </div>
      </div>
    </>
  );
};

interface Question {
  id: number;
  title: string;
  info: string;
}

export default Questions;
