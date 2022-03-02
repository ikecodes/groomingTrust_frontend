import axios from 'axios';

// const local_url = 'https://ecomms.test/api/v1';
const pro_url = 'https://ecomms-store.herokuapp.com/api/v1';

const API = axios.create({
  baseURL: pro_url,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

////AUTH
export const signup = (formdata) => API.post('/auth/register', formdata);
export const login = (formdata) => API.post('/auth/login', formdata);
export const getMe = () => API.get('/user');
