const { Router } = require("express");

const CarucelController = require("../controllers/CarucelController");

const router = Router();

router.get("/carucel", CarucelController.getImg);
router.post("/carucel", CarucelController.addImg);
router.delete("/carucel", CarucelController.deleteImg);
router.patch("/carucel", CarucelController.updateImage);

module.exports = router;
