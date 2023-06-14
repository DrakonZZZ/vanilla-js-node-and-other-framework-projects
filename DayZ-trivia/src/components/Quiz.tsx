import questions from './data';
import Questions from './Questions';

const Quiz = () => {
  return (
    <>
      <div className="container">
        <h2>🥦DAYZ-Z Trivia Night</h2>
        {questions.map((question) => (
          <>
            <Questions key={question.id} {...question} />
          </>
        ))}
      </div>
    </>
  );
};

export default Quiz;
