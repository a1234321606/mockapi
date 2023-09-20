import Router from 'koa-router';
import user from './user';
import swagger from './swagger';
import config from '../config/settings.json';

const router = new Router();

router.use(`/${config.prefix}/swagger`, swagger.routes());
router.use(`/${config.prefix}/${config.version}/users`, user.routes());

export default router;
