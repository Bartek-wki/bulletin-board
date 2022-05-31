const express = require('express');
const router = express.Router();

const Ad = require('../models/ad.model');

router.get('/ads', async (req, res) => {
  try {
    const result = await Ad.find();
    if (!result) res.status(404).json({ ad: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/ads/:id', async (req, res) => {
  try {
    const result = await Ad.findById(req.params.id);
    if (!result) res.status(404).json({ ad: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/ads', async (req, res) => {
  try {
    const { title, content, price, location, images, published, updated, author, phone, status } = req.body
    const newAd = new Ad({ title: title, content: content, price: price, location: location, images: images, published: published, updated: updated, author: author, phone: phone, status: status });
    await newAd.save();
    res.json({ message: 'Ok' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});



module.exports = router;
