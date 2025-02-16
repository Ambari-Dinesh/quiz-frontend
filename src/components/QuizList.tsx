import { useEffect, useState } from 'react';
import { getQuizzes, deleteQuiz } from '../services/api';
import styles from './QuizList.module.css';

const QuizList = ({ refreshQuizzes, onEditQuiz }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, [refreshQuizzes]); // Refresh quizzes when `refreshQuizzes` changes

  const fetchQuizzes = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  const handleDelete = async (id: number) => {
    await deleteQuiz(id);
    fetchQuizzes(); // Refresh the list after deletion
  };

  return (
    <div className={styles.QuizListCont}>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.length === 0 ?(<p className={styles.para}>No Quizzes To Display</p>):(quizzes.map((quiz) => (
          <>
          <li key={quiz.id}>
            <h2><span>Title:</span> {quiz.title}</h2>
            <p> <span>Description: </span> {quiz.description}</p>
            <p>Created at: {new Date(quiz.created_at).toLocaleString()}</p>
            <button onClick={() => onEditQuiz(quiz)}>Edit</button>
            <button onClick={() => handleDelete(quiz.id)}>Delete</button>
          </li>
          <hr></hr>
          </>
        )))}
        
      </ul>
    </div>
  );
};

export default QuizList;