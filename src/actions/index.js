import axios from 'axios';

export const getSecretWord = () => {
  // Write actual action in Redux / Context sections
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => response.data);
};
