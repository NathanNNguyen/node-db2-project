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
});

router.post(`/`, async (req, res) => {
  const data = req.body;
  try {
    const car = await db('cars').insert(data);
    res.json(car);
  }
  catch (err) {
    res.status(500).json({ message: 'Internal error', err })
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await db('cars').where({ id }).update(req.body);
    res.json(updated)
  }
  catch (err) {
    res.status(500).json({ message: 'Data could not be updated', err })
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await db('cars').where({ id }).del();
    res.json(removed)
  }
  catch (err) {
    res.status(500).json({ message: 'Data could not be deleted', err })
  }
})

module.exports = router;