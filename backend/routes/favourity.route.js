const { Router } = require("express");

const favoriteController = require("../controllers/FavourityController");

const router = Router();

router.get("/favourity", favoriteController.getFavourity);
router.delete("/favourity", favoriteController.deleteFavourity);
router.post("/favourity", favoriteController.createNewFavourity);

module.exports = router;
