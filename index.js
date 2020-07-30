const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "80";

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));
app.use(express.static(path.join(__dirname, "/node_modules/jquery/dist")));
