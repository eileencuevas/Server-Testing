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

module.exports = server;