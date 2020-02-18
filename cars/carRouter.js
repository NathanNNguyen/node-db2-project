const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get(`/`, async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
});

router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const car = await db('cars').where({ id });
    res.json(car);
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
})

router.post(`/`, async (req, res) => {
  const data = req.body;
  try {
    const car = await db('cars').insert(data);
    res.json(car);
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
})

module.exports = router;