var express = require("express");
var app = express();

console.log("Hello World");
console.log(__dirname);

app.use((req, response, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", (request, response) => {
  response.send("Hello Express");
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

let message = { message: "Hello json" };

app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.json({ message: "HELLO JSON" });
  } else {
    response.json(message);
  }
});

app.get('/now', (request, response, next) => {
  request.time = new Date().toString()
  next()
} , (request, response) => {
  response.json({'time' : request.time})
})


module.exports = app;
























 module.exports = app;
