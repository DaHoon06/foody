import axios, { AxiosInstance } from 'axios';

const test = 'foody-domain'
const baseURL = test === 'foody-domain' ? 'http://localhost:3000/api' : 'http://localhost:3000/api';
const headers = {
  'Content-Type': 'application/json',
};
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(config => {
  return config;
});

axiosInstance.interceptors.response.use(response => {
  return response;
});

export const instance = axiosInstance;