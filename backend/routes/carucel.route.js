const { Router } = require("express");

const CarucelController = require("../controllers/CarucelController");

const router = Router();

router.get("/carucel", CarucelController.getImg);
router.patch("/carucel", CarucelController.changeImg);
router.post("/carucel", CarucelController.setImg);
router.delete("/carucel", CarucelController.deleteImg);
router.post("/carucel/new", CarucelController.createCarucel);

module.exports = router;
