import { DateTime } from 'luxon';
import request, { server } from './index';
import { users, details } from './mocks/mockapi';

describe('User', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());

  describe('GET /users', () => {
    it('should get user list by jobType and time range', async () => {
      const jobType = 'manager';
      const createdFrom = DateTime.now().plus({ hours: -1 }).toISO() || '';
      const createdTo = DateTime.now().toISO() || '';
      const userIds = users.reduce((arr: any[], u: any) => {
        if (u.jobType.toLowerCase().match(jobType.toLowerCase())) arr.push(u.id);
        return arr;
      }, []);
      const expectUsers = details.filter((d: any) => {
        const date = DateTime.fromISO(d.createdAt);
        return userIds.find((id) => id === d.id)
          && DateTime.fromISO(createdFrom) <= date && date <= DateTime.fromISO(createdTo);
      });

      const res = await request.get('/users').query({ jobType, createdFrom, createdTo });
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(expectUsers.length);
    });

    it('should get user list by pagination', async () => {
      const page = 2;
      const pageSize = 5;
      const offset = (page - 1) * pageSize;
      const expectUsers = users.slice(offset, offset + pageSize);

      const res = await request.get('/users').query({ page: 2, pageSize: 5 });
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(expectUsers.length);
      expect(res.body.every((u: any, i: number) => u.id === expectUsers[i].id)).toBe(true);
    });

    it('shouldn\'t get user list if createdFrom is invalid ISO date', async () => {
      const createdFrom = DateTime.now().plus({ hours: -1 }).toISO()?.replace('T', ' ');
      const res = await request.get('/users').query({
        jobType: 'manager', createdFrom, createdTo: DateTime.now().toISO(),
      });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe(`Invalid createdFrom: ${createdFrom}`);
    });

    it('shouldn\'t get user list if createdTo is invalid ISO date', async () => {
      const createdTo = `${DateTime.now().toISO()}Z`;
      const res = await request.get('/users').query({
        jobType: 'manager', createdFrom: DateTime.now().plus({ hours: -1 }).toISO(), createdTo,
      });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe(`Invalid createdTo: ${createdTo}`);
    });

    it('shouldn\'t get user list if time range is invalid', async () => {
      const createdFrom = DateTime.now().plus({ hours: 1 }).toISO();
      const createdTo = DateTime.now().toISO();
      const res = await request.get('/users').query({ jobType: 'manager', createdFrom, createdTo });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe(`Invalid time range: ${createdFrom} - ${createdTo}`);
    });

    it('shouldn\'t get user list if page is invalid', async () => {
      const res = await request.get('/users').query({ page: 0, pageSize: 5 });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('Invalid page: 0');
    });

    it('shouldn\'t get user list if page size is invalid', async () => {
      const res = await request.get('/users').query({ page: 2, pageSize: 0 });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('Invalid pageSize: 0');
    });
  });
});
