import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Create base URL API
export const API = axios.create({
  baseURL: SERVER_URL
    ? SERVER_URL + 'api/v1/'
    : 'http://localhost:5000/api/v1/',
});

// Set Authorization Token Header
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.commin['Authorization'];
  }
};
