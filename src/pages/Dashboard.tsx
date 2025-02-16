import { useState } from 'react';
import QuizList from '../components/QuizList';
import QuizForm from '../components/QuizForm';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [refreshQuizzes, setRefreshQuizzes] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState(null);

  const handleSuccess = () => {
    setShowForm(false); 
    setRefreshQuizzes(!refreshQuizzes); 
    setEditingQuiz(null); 
  };

  const handleEditQuiz = (quiz) => {
    setEditingQuiz(quiz); 
    setShowForm(true); 
  };

  return (
    <div className={styles.dashboardcont}>
      <h1>Dashboard</h1>
      
      {showForm && (
        <QuizForm
          quiz={editingQuiz} 
          onSuccess={handleSuccess}
        />
      )}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Create Quiz'}
      </button>
      <QuizList
        refreshQuizzes={refreshQuizzes} 
        onEditQuiz={handleEditQuiz} 
      />
    </div>
  );
};

export default Dashboard;