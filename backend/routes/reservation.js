const router = require("express").Router();
const {
  create,
  updateReservation,
  viewReservations,
  deleterReservation,
  previewReservation,
} = require("../controllers/reservation");

//onst requireAuth = require("../middleware/requireAuth");
//require auth for all reservations
//router.use(requireAuth);

// Add resrvation create route
router.post("/create/:accountId", create);

// virw all reservation
router.get("/view-reservations/:accountId", viewReservations); 
router.get("/preview-reservation/:accountId/:id", previewReservation);
router.put("/update/:accountId/:id", updateReservation);
router.delete("/delete/:accountId/:id", deleterReservation);
// add signIn route
//router.post("/signIn",signInValidator, validate, signIn);
//Add forget Password route

module.exports = router;
