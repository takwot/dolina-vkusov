const { Router } = require("express");
const RaitingController = require("../controllers/RaitingController");

const router = Router();

router.get("/raiting", RaitingController.getRaiting);
router.post("/raiting", RaitingController.createRaiting);

module.exports = router;
