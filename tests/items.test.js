const request = require('supertest');
const app = require('../lib/app');

describe('route tests', () => {
  it('can create an item with post', () => {
    return request(app)
      .post('/api/v1/farts')
      .send({ type: 'wet-fart', description: 'wet sound that can lead to seepage', deadly: true })
      .then(res => {
        expect(res.body).toEqual({ 
          type: 'wet-fart', 
          description: 'wet sound that can lead to seepage', 
          deadly: true 
        });
      });
  });

  it('can get an array of items with GET', () => {
    return request(app)
      .get('/api/v1/farts')
      .then(res => {
        expect(res.body).toEqual([{ 
          type: 'wet-fart', 
          description: 'wet sound that can lead to seepage', 
          deadly: true 
        }]);
      });
  });

  it('can get an item by index', () => {
    return request(app)
      .get('/api/v1/farts/0')
      .then(res => {
        expect(res.body).toEqual({ 
          type: 'wet-fart', 
          description: 'wet sound that can lead to seepage', 
          deadly: true 
        });
      });
  });
});
