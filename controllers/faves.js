const express = require("express");
const router = express.Router();

// [export] animals route
router.get("/animals", (req, res) => {
  res.render("faves/animals", {
    title: "Favorite Animals",
    animals: ["Tiger", "Shrimp"],
  });
});

// [export] foods route
router.get("/foods", (req, res) => {
  res.render("faves/foods", {
    title: "Favorite Foods",
    foods: ["Chicken Feet", "Pork Belly", "Fried Chicken"],
  });
});

module.exports = router;
