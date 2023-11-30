const { Router } = require("express");
const router = Router();

const userController = require("../controllers/UserController");

//ALL ROUTES ARE LISTED HERE
router.get("/", (req, res) => {
  try {
    res.status(200).send("API is online");
  } catch (error) {
    res.status(500).send("API is not online");
  }
});

//list user
router.get("/user", userController.listAllUsers);
//create user
router.post("/user", userController.createUser);
//delete user
router.delete("/user", userController.deleteUserByID);
//update user
router.put("/user", userController.updateUserByID);
module.exports = router;
