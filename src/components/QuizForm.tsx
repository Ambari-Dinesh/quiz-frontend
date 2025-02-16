import { useState, useEffect } from 'react';
import { createQuiz, updateQuiz } from '../services/api';
import styles from './QuizForm.module.css';

const QuizForm = ({ quiz, onSuccess }) => {
  const [title, setTitle] = useState(quiz?.title || '');
  const [description, setDescription] = useState(quiz?.description || '');

  useEffect(() => {
    if (quiz) {
      setTitle(quiz.title);
      setDescription(quiz.description);
    }
  }, [quiz]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = { title, description, teacher_id: 1 };

    try {
      if (quiz) {
        await updateQuiz(quiz.id, quizData); 
      } else {
        await createQuiz(quizData); 
      }
      onSuccess();
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz. Check the console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formcont}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{quiz ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default QuizForm;