const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://mboizdesigns:testing@ds017862.mlab.com:17862/angpress', ['events'])


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/events', (req, res) => {
  db.events.find((err, events) => {
    if (err) {
      res.send(err);
    }
    res.json(events)
  })
});

module.exports = router;
