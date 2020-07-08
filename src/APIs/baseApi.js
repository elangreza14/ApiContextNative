import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/',
  timeout: 10000,
//   headers: {
//     token: 'testingkey',
//   },
});

export default baseApi;
