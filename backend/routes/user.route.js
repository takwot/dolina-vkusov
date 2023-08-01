const { Router } = require("express");

const UserController = require("../controllers/UserController");

const router = Router();

router.get("/login", UserController.loginUser);
router.post("/registration", UserController.createUser);
router.delete("/delete", UserController.deleteUser);
router.get("/all", UserController.allUsers);

module.exports = router;
