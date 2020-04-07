import axios from 'axios';
import { API_BASE_URL, EDIT_API_BASE_URL } from './config';

export const getAllNotes = () => {
  return axios.get(`${API_BASE_URL}`);
};

export const getNoteById = (id) => {
  return axios.get(`${API_BASE_URL}${id}`);
};

export const createNote = (title, content) => {
  return axios.post(`${API_BASE_URL}`, {
    title,
    content
  });
};

export const updateNote = (id, title, content) => {
  return axios.put(`${EDIT_API_BASE_URL}${id}`, {
    title,
    content
  });
};

export const deleteNote = (id) => {
  return axios.delete(`${API_BASE_URL}${id}`);
};