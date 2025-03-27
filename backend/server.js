const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api get / works");
});

app.listen(PORT, () =>
  console.log(`Server is up and running at port: ${PORT}`)
);