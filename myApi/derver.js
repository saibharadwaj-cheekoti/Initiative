const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Task = require("./tasks");
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/MeAppDB";

// connects our back end code with the database
try {
  mongoose.connect(dbRoute, { useNewUrlParser: true });
} catch (err) {
  console.log(err);
}

let db = mongoose.connection;

db.once("open", () => {
  console.log("connected to the database");
  // const newTask = new Task({
  //   name: "morgans task",
  //   description: "this is morgans task",
  //   objectives: "Luk"
  // });
  // console.log(newTask);
  // newTask.save(err => {
  //   if (err) console.log(err);
  //   else console.log("saved successfully");
  // });
});

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getTask", (req, res) => {
  Task.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateTask", (req, res) => {
  const { id, update } = req.body;
  Task.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteTask", (req, res) => {
  const { id } = req.body;
  Task.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putTask", (req, res) => {
  try {
    const newTask = new Task({
      id: req.body.id,
      isComplete: req.body.isComplete,
      name: req.body.name,
      description: req.body.description,
      objectives: req.body.objectives,
      owner: req.body.owner,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    });
    console.log(newTask);
    newTask.save(err => {
      if (err) console.log(err);
      else console.log("saved successfully");
    });
    res.send(newTask);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.get("/", (req, res, next) => {
  res.send("Hello, World!");
});
// // append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
