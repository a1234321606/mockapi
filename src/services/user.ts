import { DateTime } from 'luxon';
import mockapi from '../api/mockapi';

interface IUser {
  id: string
  name: string
  jobType: string
  createdAt: string
  city: string
  zipCode: string
  address: string
  gender: string
}

interface IQuery {
  jobType: string
  createdFrom: string
  createdTo: string
  page: number
  pageSize: number
}

const getUsers = async (query: IQuery) => {
  const results = await Promise.all([
    mockapi.getUsers({ jobType: query.jobType }),
    mockapi.getUserDetails(),
  ]);

  const map: any = {};
  const from = DateTime.fromISO(query.createdFrom);
  const to = DateTime.fromISO(query.createdTo);
  await Promise.all(results[1].map(async (detail: IUser) => {
    const date = DateTime.fromISO(detail.createdAt);
    if (date < from || date > to) return null;
    map[detail.id] = detail;
    return detail;
  }));

  const offser = (query.page - 1) * query.pageSize;
  return results[0].reduce((arr: IUser[], u: IUser) => {
    if (map[u.id]) arr.push({ ...u, ...map[u.id] });
    return arr;
  }, []).slice(offser, offser + query.pageSize);
};

export default {
  getUsers,
};
