import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  timeout: 5000, // Timeout duration in milliseconds
  // Add other configurations if needed
});

export default instance;
