const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(ejsLayouts);
// control center
app.use("/faves", require("./controllers/faves"));

app.use("/hates", require("./controllers/hates"));

// [GET] home route
app.get("/", (req, res) => {
  res.render("home");
});

// [GET] animals route
// app.get("/animals", (req, res) => {
//   res.render("animals", {
//     title: "Favorite Animals",
//     animals: ["Tiger", "Shrimp"],
//   });
// });

// [GET] foods route
// app.get("/foods", (req, res) => {
//   res.render("foods", {
//     title: "Favorite Foods",
//     foods: ["Chicken Feet", "Pork Belly", "Fried Chicken"],
//   });
// });

app.listen(3000, () => {
  console.log("listening to 3000 bro");
});
