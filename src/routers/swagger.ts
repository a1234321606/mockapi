import Router from 'koa-router';
import { koaSwagger } from 'koa2-swagger-ui';
import config from '../config/settings.json';

const router = new Router();

router.get('/', koaSwagger({
  routePrefix: false,
  favicon: 'favicon.ico',
  swaggerOptions: config.swagger,
}), () => {});

export default router;
