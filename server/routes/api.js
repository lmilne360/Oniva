const express = require('express');

const router = express.Router();

const apiController = require('../controllers/apiController');

const eventController = require('../controllers/eventController');


/* GET api listing. */
router.route('/')
  .get(apiController.index);

/* EVENT ROUTES */
router.route('/events')
  .get(eventController.index) // Get all events
  .post(eventController.create); // Create Event
router.route('/events/:id')
  .put(eventController.update) // Update event
  .delete(eventController.delete); // Delete event

module.exports = router;
