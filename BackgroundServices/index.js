const express = require("express");
const dotenv = require("dotenv");
const cron = require("node-cron");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

// DB CONNECTION
const DB = process.env.DB;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((e) => {
    console.error("DB connection error:", e);
  });

  // TASK SCHEDULER

  const run =() =>{
    cron.schedule('* * * * * *', () => {});
  };

  run();

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`BackgroundServices is running on port ${PORT}`);
});
