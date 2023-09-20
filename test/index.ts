import http, { Server } from 'http';
import request from 'supertest';
import config from '../src/config/settings.json';
import app from '../src/index';
import { users, details } from './mocks/mockapi';

const srv: Server = http.createServer(app.callback());
const server = {
  listen: () => srv.listen(config.port),
  close: () => srv.close(),
};

jest.mock('../src/api/mockapi', () => ({
  getUsers: jest.fn(({ jobType }) => (jobType
    ? users.filter((u) => u.jobType.toLowerCase().match(jobType.toLowerCase())) : users)),
  getUserDetails: jest.fn(() => details),
}));

export default request(`http://localhost:${config.port}/${config.prefix}/${config.version}`);
export {
  server,
};
