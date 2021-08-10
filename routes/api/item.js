const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// item model
const Item = require("../../models/Item");

// @route GET api/items
// @desc GET all items
// @access public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/items
// @desc POST items
// @access public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch(() => {
      res.json({ successs: false });
    });
});

// @route DELETE api/items
// @desc delete items
// @access public
router.delete("/:id", (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then((item) => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false, message: err }));
});

module.exports = router;
