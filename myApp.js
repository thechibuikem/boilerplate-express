require("dotenv").config();
const bodyParser = require("body-parser");
// const { json } = require("body-parser");
let express = require("express");
let app = express();

// practicing using body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// reading from html form
app.post("/name", function (req, res) {
  res.json({ name: `${req.body.first} ${req.body.last}` });
});

// practicing query parameters and verb chaining
// app
//   .route("/name")
//   .get(function (req, res) {
//     res.json({ name: `${req.query.first} ${req.query.last}` });
//   })
//   .post(function (req, res) {
//     res.json({ name: `${req.body.first} ${req.body.last}` });
//   });

// creating an echo server
// app.get("/:word/echo", function (req, res) {
//   res.json({ echo: req.params.word });
// });

// // creating and chaining middleware
// app.get(
//   "/now",
//   function (req, res, next) {
//     req.time = new Date().toString();
//     next();
//   },
//   function (req, res) {
//     res.json({ time: req.time });
//   },
// );

// // creating and giving my middleware logger access
// app.use(function (req, res, next) {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

// Serve static files from public folder
app.use("/public", express.static(__dirname + "/public"));

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

// Serve index.html at root
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// //
// app.get("/json", function (req, res) {
//   let variable = process.env.MESSAGE_STYLE;
//   if (variable == "uppercase") {
//     res.json({ message: "Hello json".toUpperCase() });
//     return;
//   }
//   res.json({ message: "Hello json" });
// });

// console.log("Hello World");

module.exports = app;
