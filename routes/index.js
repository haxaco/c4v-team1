const express = require('express');
const router = express.Router();
const { getApagonesDBClient }= require('../lib');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

// API routes
router.get('/apagon', async (req, res, next) => {
  const dbClient = await getApagonesDBClient();
  const results = await dbClient.find();

  res.json(results);
});


router.post('/apagon', async (req, res, next) => {
  const dbClient = await getApagonesDBClient();
  const data = req.body;
  try {
    const results = await dbClient.insert(data);
    res.json(results);
  } catch(error) {
    console.error(error);
  }
});

module.exports = router;

