const mongojs = require('mongojs');

const db = mongojs('mongodb://mboizdesigns:testing@ds017862.mlab.com:17862/angpress', ['events']);
const events = db.events;
module.exports = {

  // GET ALL
  index: (req, res) => {
    events.find().sort({ _id: -1 }, (err, data) => {
      if (err) {
        return res.send(err);
      }
      return res.json(data);
    });
  },

  // Get User Events
  userEvents: (req, res) => {
    events.find({ uid: req.params.uid }).sort({ _id: -1 }, (err, data) => {
      if (err) {
        return res.send(err);
      }
      return res.json(data);
    });
  },

  // CREATE
  create: (req, res) => {
    const event = req.body;
    if (!event.title) {
      res.status(400);
      res.json({
        error: 'Bad Data'
      });
    } else {
      events.save(event, (err, data) => {
        if (err) {
          res.sent(err);
        } else {
          res.json(data);
        }
      });
    }
  },

  // Update
  update: (req, res) => {
    const event = req.body;
    if (!event || !Object.keys(event).length) { //! event.title
      res.status(400);
      res.json({ error: 'Bad Data' });
    } else {
      events.update({
        _id: mongojs.ObjectId(req.params.id)
      }, event, {}, (err, data) => {
        if (err) {
          res.send(err);
        }
        res.json(data);
      });
    }
  },

  // DELETE
  delete: (req, res) => {
    events.remove({
      _id: mongojs.ObjectId(req.params.id)
    }, (err, event) => {
      if (err) {
        res.send(err);
      } else {
        res.json(event);
      }
    });
  }

};
