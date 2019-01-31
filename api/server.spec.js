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
        it('should return status code of 200 when successfully getting army units', async () => {
            let response = await request(server).get('/army/');

            expect(response.status).toBe(200);
        })

        it('should return an array of units in army', async () => {
            const expected = [
                { id: 1, name: 'Corrin', unitClass: 'Nohr Prince', uniqueWeapon: 'Yato' },
                { id: 2, name: 'Azura', unitClass: 'Songstress', uniqueWeapon: null },
                { id: 3, name: 'Ryoma', unitClass: 'Swordmaster', uniqueWeapon: 'Raijinto' },
            ]
            let response = await request(server).get('/army/');

            expect(response.body).toEqual(expected);
        })
    });
    describe('POST /army/ endpoint', () => {
        it('should give a status code of 201 when sucessfully adding a new unit', async () => {
            const newUnit = { name: 'Xander', unitClass: 'Paladin', uniqueWeapon: 'Siegfried' };

            let response = await request(server).post('/army/').send(newUnit);

            expect(response.status).toBe(201);
        })
  
        it('should return an id upon successfully adding a new unit', async () => {
            const newUnit = { name: 'Felicia', unitClass: 'Maid' };

            let response = await request(server).post('/army/').send(newUnit);

            expect(response.body).toEqual([5]);
        })
        
        it('should return an error message when new unit does not have name or unitClass', async () => {
            let response = await request(server).post('/army/');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Unit needs a name and class to continue.' });
        })
    });
    describe('DELETE /army/:id/ endpoint', () => {
        // should give a response of 200
        // should return an id
        // should return an error message/response 404 if unit does not exist
    });
})