import axios from 'axios';

const host: string = 'https://64d5e658754d3e0f13614839.mockapi.io';

const getUsers = async (params ?: any) => {
  const axiosOptions = { method: 'get', url: `${host}/api/users`, params };
  const res = await axios(axiosOptions);
  return res.data;
};

const getUserDetails = async () => {
  const axiosOptions = { method: 'get', url: `${host}/api/user-detail` };
  const res = await axios(axiosOptions);
  return res.data;
};

export default {
  getUsers,
  getUserDetails,
};
