const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/data", function (req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
