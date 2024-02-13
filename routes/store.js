const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async(req, res, next) => {
    db.connection.query('select * from products')
})