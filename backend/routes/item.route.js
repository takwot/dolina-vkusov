const { Router } = require("express");

const itemController = require("../controllers/ItemController");

const router = Router();

router.post("/item", itemController.createItem);
router.get("/item/catalog", itemController.getItem);
router.get("/item", itemController.getAllItem);
router.get("/item/category", itemController.getItemByCategory);
router.get("/item/type", itemController.getItemSecond);
router.get("/item/id", itemController.getItemOne);
router.delete("/item", itemController.deleteItem);

module.exports = router;
