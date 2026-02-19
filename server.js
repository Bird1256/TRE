const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use("/assets", express.static("assets"));
app.use("/views", express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/cart.html"));
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});
