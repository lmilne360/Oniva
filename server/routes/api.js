const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://mboizdesigns:testing@ds017862.mlab.com:17862/angpress', ['events'])


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// (READ)Get all events
router.get('/events', (req, res) => {
  db.events.find((err, events) => {
    if (err) {
      res.send(err);
    }
    res.json(events)
  })
});

// (Create) Save Event
router.post('/events', (req, res) => {
  var event = req.body;
  console.log('Create Endpoint Reached');
  console.log(event)
  if (!event.title) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    db.events.save(event, (err, event) => {
      if (err) {
        res.send(err);
      }
      res.json(event);
    })
  }
})

//(Update) UpdateEvent
router.put('/events/:id', (req, res) => {
  let event = req.body;
  console.log(event)
  if (!event || !event.title) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    console.log("updated", req.body._id, req.params.id)
    db.events.update({
      _id: mongojs.ObjectId(req.params.id)
    }, event, {}, (err, event) => {
      if (err) {
        console.log(err)
        res.send(err);
      }
      console.log(event)
      res.json(event);
    });
  }
});


//(DESTROY) Delete Event
router.delete('/events/:id', (req, res) => {
  console.log('Delete Endpoint Reached')
  db.events.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
});



module.exports = router;
