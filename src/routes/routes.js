const express = require("express");
const router = express.Router();
const itemController = require("../controllers/controller");

router.get("/items", itemController.getAllItems);
router.post("/items", itemController.addItems);
router.put("/items/:id", itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

module.exports = router;
