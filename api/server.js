const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'Api working' });
});

server.get('/army/', async (req, res) => {
    try {

        const members = await db('army');
        
        res.status(200).json(members);
    } catch (err) {
        res.status(500).json({ error: 'Seems like the army moved on.' });
    }
});

server.post('/army', async (req, res) => {
    const { name, unitClass, uniqueWeapon } = req.body;
    
    try {
        const success = await db('army').insert({name, unitClass, uniqueWeapon});

        res.status(201).json(success);
    } catch (err) {
        res.status(500).json({ error: 'Unit needs a name and class to continue.' });
    }
});

server.delete('/army/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await db('army').where({ id: id }).first().del();
        if (deleted){    
            res.status(200).json(deleted);
        } else {
            res.status(404).json({ error: 'Unit not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Could not delete unit. Try again.' });
    }
})

module.exports = server;