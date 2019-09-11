const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1');
const list = require('../controllers/list');
const addRecord = require('../controllers/addRecord');

router.get('/', async (req, res) => {
  if (req.cookies.visited !== 'true') {
    await res.cookie('visited', 'true');
    await res.cookie('id', uuidv1());
  }
  const data = await list.listRates();
  console.log(req.cookies);
  res.render('list', { data: data });
});

router.get('/add', async (req, res) => {
  if (req.cookies.visited !== 'true') {
    await res.cookie('visited', 'true');
    await res.cookie('id', uuidv1());
  }
  const data = await list.listSymbols();
  res.render('addrecord', { data: data });
});

router.post('/add', async (req, res) => {
  addRecord.addRecord(req.body, req.cookies.id);
  res.redirect('/add');
});

router.all('*', (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

module.exports = router;
