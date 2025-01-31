const Camera = require("../models/Camera");

// ดึงข้อมูลกล้องทั้งหมด (รวม Event ด้วย)
exports.getAllCameras = async (req, res) => {
  try {
    const cameras = await Camera.find().populate("events");
    res.json(cameras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ดึงข้อมูลกล้องตาม ID
exports.getCameraById = async (req, res) => {
  try {
    const camera = await Camera.findById(req.params.id);
    if (!camera) return res.status(404).json({ message: "Camera not found" });
    res.json(camera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ดึงข้อมูลกล้องตาม IP Address
exports.getCameraByIp = async (req, res) => {
  try {
    const camera = await Camera.findOne({ ipAddress: req.params.ip });
    if (!camera) return res.status(404).json({ message: "Camera not found" });
    res.json(camera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// เพิ่มข้อมูลกล้อง
exports.createCamera = async (req, res) => {
  try {
    const newCamera = new Camera(req.body);
    await newCamera.save();
    res.status(201).json(newCamera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
