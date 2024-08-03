import express from "express";
import {
  addListing,
  deleteListing,
  updateListing,
  getListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/add", verifyToken, addListing);
router.delete("/delete:listingid", verifyToken, deleteListing);
router.put("/update:listingid", verifyToken, updateListing);
router.get("/get", getListing);

export default router;
