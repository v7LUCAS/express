const express = require("express");
const app = express();

const PORT = 8081;
//Criação das Rotas
app.use(express.static(__dirname + "public"));


app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});

app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
