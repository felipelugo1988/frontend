const express = require('express');
const router = express.Router();

const mysqlConecction = require('../database');

router.get('/elautor', (req, res) => {
    mysqlConecction.query('SELECT * FROM elautor', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/libro', (req, res) => {
    mysqlConecction.query('SELECT * FROM libro', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get
module.exports = router;