const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Mag Happens on port: ${port}`));
