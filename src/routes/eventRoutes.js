const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Route สำหรับ Event
router.get("/events", eventController.getAllEvents);
router.get("/events/:id", eventController.getEventById);
router.post("/events", eventController.createEvent);

module.exports = router;