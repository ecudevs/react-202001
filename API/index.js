const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PostController = require("./controllers/PostController");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ mensaje: "Hola mundo!" });
});

app.post("/", (req, res) => {
  res.send({ mensaje: "Hola mundo! post" });
});

app.put("/", (req, res) => {
  res.send({ mensaje: "Hola mundo! put" });
});

app.delete("/", (req, res) => {
  res.send({ mensaje: "Hola mundo! delete" });
});

app.get("/saludar/:nombre", (req, res) => {
  res.send({ mensaje: "Hola que tal!? " + req.params.nombre });
});

app.post("/saludar", (req, res) => {
  res.send({ informacion: req.body });
});

app.put("/saludar", (req, res) => {
  res.send({ informacion: req.body });
});

app.delete("/saludar/:nombre", (req, res) => {
  res.send({ informacion: req.params.nombre });
});

app.get("/posts", (req, res) => {
  PostController.getPosts(res);
});

app.get("/posts/:_id", (req, res) => {
  PostController.getById(req.params._id, res);
});

app.post("/posts", (req, res) => {
  PostController.insertPost(req.body, res);
});

app.put("/posts", (req, res) => {
  PostController.updatePost(req.body, res);
});

app.delete("/posts/:_id", (req, res) => {
  PostController.deltePost(req.params._id, res);
});

mongoose.connect(
  "mongodb://heroku_lkdpvq3k:8kur5bv4sjgvdeoe3usgpd3aqg@ds133556.mlab.com:33556/heroku_lkdpvq3k",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Mag Happens on port: ${port}`));
