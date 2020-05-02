// DATABASE
const mysql = require("mysql2/promise");
let db;
const fs = require("fs");

const connectionOptions = {
  host: "us-cdbr-east-06.cleardb.net",
  port: 3306,
  user: "b6b68d3688aa15",
  password: "3fd70966",
  database: "heroku_e378c1a8b576162",
};

mysql
  .createConnection(connectionOptions)
  .then((connection) => {
    db = connection;
    console.log("connected to DB as id " + connection.threadId);
  })
  .catch((err) => {
    console.log("error connecting to DB: " + err.stack);
    process.exit(1); // Quit node if there is no DB connection
  });

// SERVER
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/people", async function (req, res) {
  const [rows] = await db.query(`SELECT * FROM user_info`);
  return res.json(rows);
});

app.post("/api/people", async function (req, res) {
  const user = req.body;
  const [results] = await db.query("INSERT INTO user_info SET ?", {
    username: user.username,
    password: user.password,
  });
  return res.json(user);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
