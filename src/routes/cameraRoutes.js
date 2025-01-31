const express = require("express");
const router = express.Router();
const cameraController = require("../controllers/cameraController");

// Route สำหรับ Camera
router.get("/cameras", cameraController.getAllCameras);
router.get("/cameras/:id", cameraController.getCameraById);
router.get("/cameras/ip/:ip", cameraController.getCameraByIp);
router.post("/cameras", cameraController.createCamera);

module.exports = router;
