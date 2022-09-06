
import request from 'supertest';

import app from '../../app';
import { Todos } from './todos.models';

beforeAll(async () => {
  try {
    await Todos.drop();
  } catch (error) {
  }
});

describe('GET /api/v1/todos', () => {
  it('responds with an array of todos', async () => 
    request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(0);
        // expect(response.body[0]).toHaveProperty('content');
        // expect(response.body[0]).toHaveProperty('done');
      }),
  );
});
describe('POST /api/v1/todos', () => {
  it('responds with an error if todo is invalid', async () => 
    request(app)
      .post('/api/v1/todos')
      .set('Accept', 'application/json')
      .send({
        content: '',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response) => {
        expect(response.body).toHaveProperty('message');

      }),
  );
  it('responds with an inserted objects', async () => 
    request(app)
      .post('/api/v1/todos')
      .set('Accept', 'application/json')
      .send({
        content: 'Learn TS',
        done: false,
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('content');
        expect(response.body).toHaveProperty('done');
        expect(response.body.content).toBe('Learn TS');
        expect(response.body).toHaveProperty('_id');

      }),
  );
});
