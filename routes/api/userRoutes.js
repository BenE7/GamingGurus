const router = require("express").Router();
const usersController = require("../../controllers/userControllers");

// Matches with "/api/users"
router.route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create);



module.exports = router;
