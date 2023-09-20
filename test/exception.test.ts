import { ServerException } from '../src/utilities/responser/exceptions';

describe('Responser Exception', () => {
  describe('ServerException', () => {
    it('should throw ServerException', async () => {
      const e = new ServerException('Unit Test');
      expect(e.name).toBe('Server Exception');
      expect(e.message).toBe('Unit Test');
      expect(e.status).toBe(500);
    });
  });
});
