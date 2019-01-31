const request = require('supertest');

const server = require('./server.js');

describe('server.js tests', () => {
    describe('GET / endpoint', () => {
        it(`should return an object with 'Api working' when successful`, async () => {
            let response = await request(server).get('/');
            
            expect(response.type).toMatch(/json/i);
            expect(response.body).toEqual({ message: 'Api working' });
        })

        it(`should return a status code of 200 when successful`, async () => {
            let response = await request(server).get('/');

            expect(response.status).toBe(200);
        })
    });
    describe('GET /army/ endpoint', () => {
        // should give response of 200 when sucessful
        // should give an array of memebers
    });
    describe('POST /army/ endpoint', () => {
        // should give a response of 201
        // should return an id
        // should return an error message/response 500 if unit does not have name or unitClass
    });
    describe('DELETE /army/:id/ endpoint', () => {
        // should give a response of 200
        // should return an id
        // should return an error message/response 404 if unit does not exist
    });
})