const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoute = require('./routes/authRoute')
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB cluster: cluster0"); // add cluster name dynamically according to environment
  })
  .catch((err) => console.log("error connecting to mongo", err));
app.use('/api', authRoute);
app.get("/", (req, res) => {
  res.send("api get / works");
});

app.listen(PORT, () =>
  console.log(`Server is up and running at port: ${PORT}`)
);
