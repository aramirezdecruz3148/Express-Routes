const notFound = require('../lib/middleware/notFound');

describe('notFound middleware', () => {
  it('can sen error message to browser', () => {
    const next = jest.fn();

    notFound(null, null, next);
    const expectedError = new Error('path not found');
    expect(next).toHaveBeenCalledWith(expectedError);
  });
});
