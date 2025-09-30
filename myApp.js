require("dotenv").config();

let express = require("express");
let app = express();

// // Serve static files from public folder
app.use("/public", express.static(__dirname + "/public"));

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

// Serve index.html at root
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Serve index.html at root
app.get("/json", function (req, res) {
  let variable = process.env.MESSAGE_STYLE;
  if (variable == "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
    return;
  }
  res.json({ message: "Hello json" });
});

console.log("Hello World");

module.exports = app;
