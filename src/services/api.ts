import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
  return response.data;
};

export const createQuiz = async (quiz: { title: string; description: string; teacher_id: number }) => {
  const response = await axios.post(`${API_BASE_URL}/quizzes`, quiz);
  return response.data;
};

export const getQuizzes = async () => {
  const response = await axios.get(`${API_BASE_URL}/quizzes`);
  return response.data;
};

export const updateQuiz = async (id: number, quiz: { title: string; description: string }) => {
  const response = await axios.put(`${API_BASE_URL}/quizzes/${id}`, quiz);
  return response.data;
};

export const deleteQuiz = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/quizzes/${id}`);
  return response.data;
};