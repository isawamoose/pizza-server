const request = require('supertest');
const app = require('./server');

beforeEach((done) => {
  request(app)
    .delete('/api/store')
    .expect(200)
    .end((err) => (err ? done(err) : done()));
});

test('create and get a store', async () => {
  await request(app)
    .post('/api/store/provo')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(/{"date":".*","name":"provo"}/);

  await request(app)
    .get('/api/store/provo')
    .expect(200)
    .expect(/{"date":".*","name":"provo"}/);
});

test('update a store', async () => {
  await request(app).post('/api/store/orem');
  await request(app)
    .put('/api/store/orem')
    .send({ manager: 'joe' })
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(/{"date":".*","name":"orem","manager":"joe"}/);
});
