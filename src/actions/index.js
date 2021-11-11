import axios from 'axios';

export const getSecretWord = () => {
  // Write actual action in Redux / Context sections
  return axios.get(`http://localhost:3030`).then((response) => response.data);
};
