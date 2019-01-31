const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'Api working' });
});

module.exports = server;