import { IRouterContext } from 'koa-router';
import { DateTime } from 'luxon';
import { ArgumentException } from '../utilities/responser/exceptions';
import responser from '../utilities/responser';
import userService from '../services/user';
import validator from '../utilities/validator';

const getUsers = async (ctx: IRouterContext) => {
  const { query }: any = ctx.request;
  if (query.createdFrom || query.createdTo) {
    if (!validator.isIsoDate(query.createdFrom)) throw new ArgumentException(`Invalid createdFrom: ${query.createdFrom}`);
    if (!validator.isIsoDate(query.createdTo)) throw new ArgumentException(`Invalid createdTo: ${query.createdTo}`);
    if (DateTime.fromISO(query.createdFrom) > DateTime.fromISO(query.createdTo)) {
      throw new ArgumentException(`Invalid time range: ${query.createdFrom} - ${query.createdTo}`);
    }
  }
  if (query.page) {
    if (!validator.isInteger(query.page) || query.page < 1) throw new ArgumentException(`Invalid page: ${query.page}`);
  } else query.page = 1;
  if (query.pageSize) {
    if (!validator.isInteger(query.pageSize) || query.pageSize < 1) throw new ArgumentException(`Invalid pageSize: ${query.pageSize}`);
  } else query.pageSize = 10;
  const data = await userService.getUsers(query);
  responser.finalize(ctx, 200, data);
};

export default {
  getUsers,
};
