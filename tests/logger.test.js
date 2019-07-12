const logger = require('../lib/middleware/logger');

describe('logger middleware', () => {
  it('console.log the request mthod/path/body', () => {
    console.log = jest.fn();

    const req = {
      method: 'GET', 
      path: '/test'
    };

    logger(req, {}, () => { });
    expect(console.log).toHaveBeenCalledWith('GET /test');
  });
});
