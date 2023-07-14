const { Router } = require("express");

const UserController = require("../controllers/UserController");

const router = Router();

router.get("/login", UserController.loginUser);
router.post("/registration", UserController.createUser);
router.get("/cart", UserController.getCart);
router.patch("/cart", UserController.updateCart);
router.get("/favourity", UserController.getFavourity);
router.patch("/favourity", UserController.updateFavourity);
router.delete("/delete", UserController.deleteUser);
router.get("/all", UserController.allUsers);

module.exports = router;
