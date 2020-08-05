const express = require("express");
const router = express.Router();

// [export] animals route
router.get("/animals", (req, res) => {
  res.render("hates/animals", {
    title: "Hated Animals",
    animals: ["Snake", "Fly"],
  });
});

// [export] foods route
router.get("/foods", (req, res) => {
  res.render("hates/foods", {
    title: "Hated Foods",
    foods: ["Kale", "Almond Milk", "Bland Soup"],
  });
});

module.exports = router;
