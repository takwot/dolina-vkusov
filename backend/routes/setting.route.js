const { Router } = require("express");

const SettingController = require("../controllers/SettingController");

const router = Router();

router.get("/settings", SettingController.getSettings);
router.post("/settings", SettingController.changeSetting);

module.exports = router;
