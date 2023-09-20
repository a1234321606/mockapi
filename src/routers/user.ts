import Router, { IRouterContext } from 'koa-router';
import userController from '../controllers/user';

const router = new Router();

router.get('/', async (ctx: IRouterContext) => userController.getUsers(ctx));

export default router;
