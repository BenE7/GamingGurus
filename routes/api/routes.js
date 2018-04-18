const router = require("express").Router();
const usersController = require("../../controllers/userControllers");
const ratingsController= require("../../controllers/ratingsControllers");
const appoinmentsController = require("../../controllers/appointmentsController")

// Matches with "/api/users"
router.route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/api/users/:id")
  .post(usersController.update);

router.route("/api/getUser/:id")
  .get(usersController.findOne); 

// Matches with "/api/ratings"
router.route("/api/ratings")
 .get(ratingsController.findAll);

 router.route("/api/postRating")
 .post(ratingsController.createRating);

 router.route("/api/updateRating/:id")
  .post(ratingsController.updateRating)

  router.route("/api/rating/:id")
 // .get(ratingsController.findOne)

 router.route("/api/isGuru")
   .post(usersController.changeToGuru)

   router.route("/api/appointments")
   .get(appoinmentsController.findAll)
    .post(appoinmentsController.createAppointment)





module.exports = router;