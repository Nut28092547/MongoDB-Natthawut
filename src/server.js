// server.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cameraRoutes = require("./routes/cameraRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
app.use(express.json());

// เชื่อมต่อกับฐานข้อมูล MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// เพิ่ม Route
app.use("/api", cameraRoutes);
app.use("/api", eventRoutes);

// ทดสอบ Endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
