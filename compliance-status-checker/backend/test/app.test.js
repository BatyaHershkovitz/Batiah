const app = require('../src/app')
const supertest = require('supertest');
const requestWithSupertest = supertest(app);

describe('GET /get-all-average', () => {
    it('should show all data', async () => {
        const res = await requestWithSupertest.get('/get-all-average');
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('data')
        expect(res.body.message).toEqual('Success');
    });
});