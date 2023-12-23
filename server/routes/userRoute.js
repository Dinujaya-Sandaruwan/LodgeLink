import express from "express";
import {
  bookVisit,
  createUser,
  getBookedVisits,
  cancelBooking,
  handleFavouriteResedinces,
  getAllFavourites,
} from "../controllers/userCtrl.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/book-visit/:id", bookVisit);
router.post("/booked-visits/", getBookedVisits);
router.post("/cancel-booking/:id", cancelBooking);
router.post("/toFav/:rid", handleFavouriteResedinces);
router.post("/allFav/", getAllFavourites);

export { router as userRoute };
