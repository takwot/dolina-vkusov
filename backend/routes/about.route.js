const { Router } = require("express");

const AboutContorller = require("../controllers/AboutController");

const router = Router();

router.get("/about", AboutContorller.getAbout);
router.patch("/about", AboutContorller.changeAbout);
router.post("/about", AboutContorller.createAbout);
router.delete("/about", AboutContorller.deleteAbout);

module.exports = router;
