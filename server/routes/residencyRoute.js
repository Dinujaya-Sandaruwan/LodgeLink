import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidencyById,
} from "../controllers/residencyCtrl.js";

const router = express.Router();

router.post("/create", createResidency);
router.get("/all", getAllResidencies);
router.get("/:id", getResidencyById);

export { router as residencyRoute };
