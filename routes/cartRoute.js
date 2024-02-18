const express = require("express");
const router = express.Router();

const CartController = require("../controller/cartController");

router.get("/", CartController.getItems);
router.post("/new", CartController.addItem);
router.put("/setAmount", CartController.setAmount);
router.delete("/delete", CartController.deleteItems);

module.exports = router;
